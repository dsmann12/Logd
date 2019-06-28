// Initialize required dependencies
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


// Intialize express application
const app = express();

// Use json parser
app.use(bodyParser.json({limit: '20mb'}));

// Handle error During Database Connection
mongoose.connection.on('error', (err) => {
    console.log('Database Connection Error: ' + err);
});

// Log connection to database
mongoose.connection.once('connected', () => {
    console.log('Leaderboard connected to database');
});

// Connect to MongoDB Database
mongoose.connect('mongodb://localhost:27017/leaderboard', 
                { useNewUrlParser: true });

const port = 8000;

// Handle root address of website
app.get('/', (req, res) => {
    res.send("Hello World!");
});

app.listen(port, () => {
    // backticks allow use of variables
    console.log(`Server running on port ${port}!`);
});