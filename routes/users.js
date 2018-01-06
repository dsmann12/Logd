const express = require('express'),
      router = express.Router(),
      passport = require('passport'),
      jwt = require('jsonwebtoken'),
      config = require('../config/database'),
      User = require('../models/user'),
      mime = require('mime'),
      multer = require('multer'),
      middleware = require('../middleware');

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'public/avatars/')
    },
    filename: function(req, file, cb) {
        cb(null, req.user.username + '.' + mime.extension(file.mimetype));
    }
});

const upload = multer({ storage: storage }).single('avatar');

//Register Route
router.post('/register', (req, res, next) => {
    if (req.body.password !== req.body.confirmPassword) {
        res.json({
            success: false,
            msg: 'Passwords do not match',
        });
    } else {
        let newUser = new User({
            name: req.body.name,
            email: req.body.email,
            username: req.body.username,
            password: req.body.password,
        });

        User.addUser(newUser, (err, user) => {
            if(err) {
                res.json({success: false, msg: 'Failed to register user'})
            }
            else {
                const token = jwt.sign(user, config.secret, {
                    expiresIn: 604800 //1 Week
                });
                res.json({
                    success: true,
                    msg: 'User registered',
                    user: user,
                    token: 'JWT ' + token
                });
            }
        });
    }
});

//Authenticate
router.post('/authenticate', (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;

    User.getUserByUsername(username, (err, user) => {
        if (err) {
            throw err;
        }
        else if (!user) {
            return res.json({success: false, msg: 'User not found'});
        }

        User.comparePassword(password, user.password, (err, isMatch) => {
            if (err) {
                throw err;
            }
            else if(isMatch) {
                console.log('User', user._id);
                const userObj = {
                    _id: user._id,
                    username: user.username,
                    name: user.name,
                    email: user.email
                }
                const token = jwt.sign(userObj, config.secret, {
                    expiresIn: 604800 // 1 Week
                });

                console.log('User after sign', user._id);

                res.json({
                    success: true,
                    token: 'JWT ' + token,
                    user: {
                        _id: user._id,
                        name: user.name,
                        username: user.username,
                        email: user.email,
                    }
                });
            }
            else {
                return res.json({success: false, msg: 'Wrong Password'});
            }
        });
    });
});

//Profile
router.get('/profile', [passport.authenticate('jwt', {session:false}), middleware.isLoggedIn], (req, res, next) => {
    if (req.isAuthenticated()) {
        console.log('isAuthenticated in route');
    }
    
    res.json({user: req.user});
});

router.get('/:id', (req, res) => {
    if (req.isAuthenticated()) {
        console.log('Is Authenticated in route');
    }

    console.log('outside is authenticated');

    User.findById(req.params.id, (err, user) => {
        if (err) {
            console.log(err);
            res.json({
                success: false,
                msg: 'An error occurred',
                error: err
            });
        } else {
            res.json({
                success: true,
                user: user
            });
        }
    });
});

router.get('/username/:username', (req, res) => {
    User.getUserByUsername(req.params.username, (err, user) => {
        if (err) {
            console.log(err);
            res.json({
                success: false,
                msg: 'An error occurred',
                error: err
            });
        } else {
            res.json({
                success: true,
                user: user
            });
        }
    });
});

// must check if logged in
// also must check that user 
router.post('/avatar', [passport.authenticate('jwt', {session:false}), middleware.isLoggedIn], (req, res) => {
    upload(req, res, (err) => {
        if (err) {
            console.log(err);
            res.json({
                success: false,
                msg: 'An error occurred'
            });
        } else {
            //console.log(req);
            console.log(req.file);
            console.log(req.file.path);

            var s3 = require('s3');

            var client = s3.createClient({
            maxAsyncS3: 20,     // this is the default
            s3RetryCount: 3,    // this is the default
            s3RetryDelay: 1000, // this is the default
            multipartUploadThreshold: 20971520, // this is the default (20 MB)
            multipartUploadSize: 15728640, // this is the default (15 MB)
            s3Options: {
                accessKeyId: process.env.AWS_ACCESS_KEY_ID,
                secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
                region: "us-east-1",
                // endpoint: 's3.yourdomain.com',
                // sslEnabled: false
                // any other options are passed to new AWS.S3()
                // See: http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/Config.html#constructor-property
            },
            });

            console.log('//////////////////////////////////////////////////////');
            // console.log(req);

            var params = {
                localFile: req.file.path,
            
                s3Params: {
                Bucket: process.env.S3_BUCKET,
                Key: req.file.filename,
                ACL: 'public-read'
                // other options supported by putObject, except Body and ContentLength.
                // See: http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#putObject-property
                },
            };

            var uploader = client.uploadFile(params);
            uploader.on('error', function(err) {
                console.error("unable to upload:", err.stack);
            });
            uploader.on('progress', function() {
                console.log("progress", uploader.progressMd5Amount,
                        uploader.progressAmount, uploader.progressTotal);
            });
            uploader.on('end', function() {
                console.log("done uploading");
                res.json({
                    success: true,
                    msg: 'Image uploaded!',
                    avatar: req.file.filename
                });
            });
        }
    });

});

router.get('/:id/backlog/:gameId', (req, res) => {
    User.findOne({
        _id: req.params.id,
        "backlog.game": req.params.gameId
    }, (err, user) => {
        if (err) {
            console.log(err);
        } else if (!user) {
            res.json({
                success: false,
                msg: 'User has not backlogged the game'
            });
        } else {
            res.json({
                success: true,
                msg: 'User has backlogged the game'
            });
        }
    });
});

// check if authenticated
// check if id === jwt.user.id
router.post('/:id/backlog', [passport.authenticate('jwt', {session:false}), middleware.isLoggedIn], (req, res) => {
   User.update({
       _id: req.user._id,
       "backlog.game": { $ne: req.body.game._id }
   }, {
       $push: { backlog: { game: req.body.game._id, date: Date.now() } }
   }, (err, response) => {
        if (err) {
            console.log(err);
        } else {
            res.json(response);
        }
   });
});


// check if authenticated
// check if id === req.user._id
router.delete('/:id/backlog/:gameId', [passport.authenticate('jwt', {session:false}), middleware.isLoggedIn], (req, res) => {
    User.update({
        _id: req.user._id,
        "backlog.game": req.params.gameId
    }, {
        $pull: { backlog: { game: req.params.gameId } }
    }, (err, response) => {
        if (err) {
            console.log(err);
        } else {
            res.json(response);
        }
    });
});


// update user
// check if authenticated
// check if id === req.user._id
router.put('/:id', [passport.authenticate('jwt', {session:false}), middleware.isLoggedIn, middleware.checkUser], (req, res) => {
    console.log('Through middleware');
    User.findByIdAndUpdate(req.params.id, { $set: req.body.data }, { new: true }).populate('favorites').exec((err, user) => {
        if (err) {
            console.log(err);
            res.json({
                success: false,
                msg: 'An error occurred',
                error: err
            });
        } else {
            res.json({
                success: true,
                user: user
            });
        }
    });
});

// get all users
router.get('/', (req, res) => {
    User.find({})
    .populate('favorites')
    .populate('lists')
    .populate('played')
    .populate('reviews')
    .populate({ path: 'ratings', populate: { path: 'game'}, options: { sort: { 'date': -1}}})
    .populate({ path: 'log', populate: { path: 'game' }, options: { sort: { 'logDate': 1 } } })
    .exec((err, users) => {
        if (err) {
            console.log(err);
            res.json({
                success: false,
                msg: 'An error occurred',
                error: err
            });
        } else {
            res.json({
                success: true,
                users: users
            });
        }
    });
});

module.exports = router;    