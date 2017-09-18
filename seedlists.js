const igdb = require('igdb-api-node').default;
const client = igdb('IqIxOdRhXHmshZdaZo4CBtUFWq96p1Jn5OIjsnzFkhJ9sm8b04');
const mongoose = require('mongoose');
const Game = require('./models/game');
const Review = require('./models/review');
const List = require('./models/list');
const Comment = require('./models/comment');
const config = require('./config/database.js');
const User = require('./models/user');
const async = require('async');
/*
AC:                                     128     7
AC2:                                    127     9
AC2Brotherhood:                         113     9    
AC2Revelations:                         537     7
AC3:                                    1266    6
AC4:                                    1970    8
ACUnity:                                5606    6   
Bastion:                                1983    8
Bioshock:                               20      10
Bioshock Infinite:                              9
Bloodborne:                             7334    10
Braid:                                  2853    10
Call of Duty:                           621     8
Call of Duty UO:                        624     9
Call of Duty 2:                         622     10
Call of Duty 3:                         949     6
Call of Duty 4:                         623     10
Call of Duty MW 2:                      559     8
Call of Duty WaW:                       625     6
Destiny:                                1939    7
Emily Is Away:                          14762   9
Fallout 3:                              15      9
FalloutNV:                              16      10
Fallout 4:                              9630    7
FF7:                                    427     10
Gears of War:                                   8
Gears of War 2:                                 8
God of War:                             549     8
God of War 2:                           551     9
God of War 3:                           499     9
Gone Home:                              1906    9
GTA 3:                                  730     9
GTA Vice City:                          733     9
GTA San Andreas:                        732     10
GTA IV:                                 731     10
GTA V:                                  1020    9
HL:                                     231     10
HL2:                                    233     10
Halo:                                   740     9
Halo 2:                                 986     8
Halo 3:                                 989     9
Halo 4:                                 991     7
Halo 5:                                 6803    7
Heavy Rain:                             493     9
Her Story:                              11346   9
Horizon:                                11156   8
Ico:                                    7170    10
Infamous:                               523     9
Infamous 2:                             515     8
Infamous SS:                            1941    7
Journey:                                1352    10
Killzone:                               1865    8
Killzone 2:                             1866    7
KOTOR:                                  116     10
The Last Guardian:                      117     9
TLOU:                                   1009    10
Limbo:                                  1331    9
Little Big Planet:                      1058    8
Mass Effect:                            73      10
ME2:                                    74      10
ME3:                                    75      8
MEA:                                    7349    6
MGS:                                    375     10
MGS2:                                   376     8
MGS3:                                   379     10
MGS4:                                   380     9
Super Metroid:                          1103    10
Metroid Fusion:                         1104    9
Metroid ZM:                             1107    8
Oblivion:                               59      10
Papers Please:                          2935    9
Pokemon Red:                            1561    10
Pokemon Emerald:                    
Pokemon Silver:                         1513    10
Portal:                                 71      10
Portal 2:                               72      10
Prince of Persia SoT:                   836     9
Resistance:                             1278    7
Resistance 2:                           3205    8
Resogun:                                6007    8
Rocket League:                          11198   10
Shadow of Mordor:                       3025    8
SOTC:                                   2207    10
Skyrim:                                 472     8
The Stanley Parable:                    3035    9
Star Fox 64:                            2591    10
Star Wars Battlefront:                  141     7
Star Wars Battlefront II:               142     8
Star Wars Battlefront (New):            2113    6
Star Wars Bounty Hunter:                4180    8
Star Wars Clone Wars:                   3760    6
Star Wars Empire At War:                144     8
Star Wars Force Unleashed:              475     7
Star Wars Jedi Starfighter:             6160    6
Star Wars ROTS:                         6159    7
Star Wares Rogue Squadron:              163     8
Super Mario 3:                          1068    10
Super Mario 64:                         1074    10
Super Meat Boy:                         885     8
Titanfall:                              2115    7
Uncharted 2:                            565     9
Uncharted 3:                            512     8
Uncharted 4:                            7331    9
Until Dawn:                             7609    8
The Witcher:                            80      8
The Witcher 2:                          478     8
The Witcher 3:                          1942    10

*/

//Connect To Database
mongoose.connect(config.database);

//On Connection 
mongoose.connection.on('connected', () => {
	console.log('Connected to database ' + config.database);
});

//Make Lists

//My Favorite Games of All Time
const favoriteGames = {
    title: 'My Favorite Games of All Time',
    games: [
        2207, //SOCT
        73, //ME
        233, //HL2
        1352, //Journey
        71, //Portal
        1009, //TLOU
        59, //Oblivion
        379, //MGS3
        74, //ME2
        1942, //Witcher3
        1074, //SuperMario64
        231, //Half Life
        116, //KOTOR
        427, //FF7
        375, //MGS
        1068, //SuperMario3
        2853, //Braid
        1103, //Super Metroid
        1513, //PokemonSilver
        72, //Portal 2
        20, //Bioshock
        16, //FNV
        731, //GTAIV
        622, //CoD2
        2591, //StarFox64
        7334, //Bloodborne
        7170, //Ico
        623, //CoD4
        11198, //Rocket League
        1561, //Pokemon Red
        732, //GTASA
        380, //MGS4
        127, //AC2
        7331, //Uncharted 4
        117, //TLG
        15, //Fallout 3
        836, //PoPSoT
        740, //Halo
        499, //GoW3
        565, //uncharted 2
        624, //CODUO
        523, //Infamous
        989, //Halo 3
        551, //GoW2
        1103, //metroid fusion
        14762, //emilyisaway
        733, //GTAVC
        11346, //herstory
        6803, //heavyrain
    ]
};

//assassins creed ranked
const assassins = {
    title: "Assassin's Creed Ranked",
    games: [
        127, //ac2
        113, //ac2b
        1970, //ac4
        128, //ac
        537, //ac2r
        1266, //ac3
        5606, //acu
    ]
};

//favorite star wars games
const starwars = {
    title: 'Star Wars Games Ranked',
    games: [
        116, //kotor
        142, //stbf2
        163, //rs
        144, //eaw
        4180, //bh
        475, //fu
        141, //swbf
        6159, //rots
        2113, //swbfnew
        //3760, //swcw
        //6160, //swjs
    ]
};

//favorite ps4 games
const ps4 = {
    title: 'PS4 Games Ranked',
    games: [
        7334, //bloodborne
        7331, //uc4
        117, //tlg
        11156, //horizon
        7609, //until dawn
        6007, //resogun
        1941, //iss
    ]
};

//favorite ps3 games:
const ps3 = {
    title: 'PS3 Games Ranked',
    games: [
        1352, //journey
        1009, //tlou
        380, //mgs4
        565, //u2
        499, //gow3
        523, //infamous
        493, //heavyrain
        512, //u3
        515, //i2
        1058, //lbp
        3205, //resistance2
        1278, //resistance
        1866, //killzone2
    ]
};

//favorite indies
const indies = {
    title: 'My Favorite Indie Games',
    games: [
        2853, //braid
        11198, //rocketleague
        14762, //emilyisaway
        11346, //herstory
        1331, //limbo
        3035, //standleyparable
        1906, //gonehome
        2935, //papersplease
        1983, //bastion
        885, //supermeatboy
    ]
};

//call of duty ranked
const cod = {
    title: 'Call of Duty Games Ranked',
    games: [
        622, //2
        623, //4
        624, //uo
        621, //1
        559, //mw2
        625, //waw
        949, //3
    ]
};

//favorite nintendo games
//mario64, mario3, ssb64: , metro//SOTC: , ICO: , MGS3: , MGS2: , GTA:SA: , GTA3: , GTAVC: , gow2: , gow1: , battlefront2: 
//max payne: , socom2, socom3, bountyhunterbountyhunter, midnightclub, pop,idII: , metroidfusion: , marioparty64: , 

//favorite RPGs
// oblivion, witcher3, fnv: , fo3: , skyrim: , pokemonsilver: , ff7: , 

//favorite ps2 games 
const ps2 = {
    title: 'My Favorite PS2 Games',
    games: [
        2207, //SOTC
        379, //MGS3
        7170, //ICO
        732, //GTASA
        551, //GOW2
        733, //GTAVC
    ]
};

//halo ranked
// h3: , h1: , h2: , h4: , h5: 

//favorite xbox360 games
//cod2: , halo3: , gears2: , gears: , l4d: 

//favorite xbox games
//halo , halo2, serioussam, kotor, 

//favorite 7th generation games
const seventh = {
    title: 'My Favorite Games of the Seventh Generation',
    games: [
        73, //me
        1352, //journey
        71, //portal    
        1009, //tlou
        59, //oblivion
        74, //me2
        2853, //braid
        72, //portal2
        20, //bioshock
        16, //fnv
        731, //gta4
        622, //cod2
        623, //cod4
        380, //mgs4
        127, //ac2
        15, //fallout3
        499, //gow3
        565, //u2
        523, //infamous
        989, //halo3
        6803, //heavyrain
    ]
};


//favorite 8th generation games
const eighth = {
    title: 'My Favorite Games of the Eighth Generation',
    games: [
        1942, //witcher3
        7334, //bloodborne
        11198, //rocketleague
        7331, //u4
        117, //tlg
        11156, //horizon
        1970, //ac4
        6007, //resogun
        3025, //shadowofmordor
        2115, //titanfall
        6803, //halo5
        9630, //fo4
        1939, //destiny
        1941, //infamousss
        2113, //swbf
    ]
};

//Get user
User.findOne( { username: 'dsmann12'},
    (err, user) => {
        if(err) {
            console.log(err);
            throw err;
        }

        console.log(user);

        
        //when you have user, create lists made by user
        const lists = [
            favoriteGames,
            ps2,
            ps3,
            ps4,
            assassins,
            seventh,
            eighth,
            cod,
            indies,
            starwars
        ]

        //Get each gameID from list, find game in database with its id, 
        //then create a new list object, push game to
        lists.forEach(
            (list) => {
                const newList = [];
                list.games.forEach(
                    (gameId, index) => {
                        //get game from database
                        Game.getGameByIGDBId(gameId, 
                            (err, game) => {
                                if(err) {
                                    console.log(err);
                                }

                                if(!game) {
                                    console.log('Null game returned for id' + gameId);
                                }
                                else {
                                    //console.log(game.name);
                                    newList.splice(index, 0, game);
                                    if(newList.length === list.games.length) {
                                        const listObj = new List({
                                            user: user,
                                            title: list.title,
                                            games: newList,
                                            likes: [],
                                            comments: [],
                                            date: new Date()
                                        });
                                        console.log(listObj.title, ' ', listObj.games.length);
                                        listObj.save();
                                    }
                                }
                            }
                        );
                    }
                );
            }
        );
    }
);

