/// Part 1: Building the Object ///
function gameObject() {
    const obj = {
        "home": {
            "teamName": "Brooklyn Nets",
            "colors": ["Black", "White"],
            "players": {
                "Alan Anderson": {
                    "number": 0,
                    "shoe": 16,
                    "points": 22,
                    "rebounds": 12,
                    "assists": 12,
                    "steals": 3,
                    "blocks": 1,
                    "slamDunks": 1
                },
                "Reggie Evans": {
                    "number": 30,
                    "shoe": 14,
                    "points": 12,
                    "rebounds": 12,
                    "assists": 12,
                    "steals": 12,
                    "blocks": 12,
                    "slamDunks": 7
                },
                "Brook Lopez": {
                    "number": 11,
                    "shoe": 17,
                    "points": 17,
                    "rebounds": 19,
                    "assists": 10,
                    "steals": 3,
                    "blocks": 1,
                    "slamDunks": 15
                },
                "Mason Plumlee": {
                    "number": 0,
                    "shoe": 19,
                    "points": 26,
                    "rebounds": 12,
                    "assists": 6,
                    "steals": 3,
                    "blocks": 8,
                    "slamDunks": 5
                },
                "Jason Terry": {
                    "number": 31,
                    "shoe": 15,
                    "points": 19,
                    "rebounds": 2,
                    "assists": 2,
                    "steals": 4,
                    "blocks": 11,
                    "slamDunks": 1
                }
            }
        },
        "away": {
            "teamName": "Charlotte Hornets",
            "colors": ["Turquoise", "Purple"],
            "players": {
                "Jeff Adrien": {
                    "number": 4,
                    "shoe": 18,
                    "points": 10,
                    "rebounds": 1,
                    "assists": 1,
                    "steals": 2,
                    "blocks": 7,
                    "slamDunks": 2
                },
                "Bismak Biyombo": {
                    "number": 0,
                    "shoe": 16,
                    "points": 12,
                    "rebounds": 4,
                    "assists": 7,
                    "steals": 7,
                    "blocks": 15,
                    "slamDunks": 10
                },
                "DeSagna Diop": {
                    "number": 2,
                    "shoe": 14,
                    "points": 24,
                    "rebounds": 12,
                    "assists": 12,
                    "steals": 4,
                    "blocks": 5,
                    "slamDunks": 5
                },
                "Ben Gordon": {
                    "number": 8,
                    "shoe": 15,
                    "points": 33,
                    "rebounds": 3,
                    "assists": 2,
                    "steals": 1,
                    "blocks": 1,
                    "slamDunks": 0
                },
                "Brendan Haywood": {
                    "number": 33,
                    "shoe": 15,
                    "points": 6,
                    "rebounds": 12,
                    "assists": 12,
                    "steals": 22,
                    "blocks": 5,
                    "slamDunks": 12
                }
            }
        }
    };
    return obj;
}

console.log(gameObject());

/// Function Building ///

function numPointsScored(playerName) {
    const gameObj = gameObject();
    for (let gameKey in gameObj){
        let teamObj = gameObj[gameKey];
        for (let teamKey in teamObj){
            let playersObj = teamObj["players"];
            for (let playersKey in playersObj){
                if (playersKey === playerName){
                    return playersObj[playersKey]["points"];
                }
            }
        }
    }
}

//console.log(numPointsScored("Brendan Haywood"));

// function shoeSize(playerName) {
//     const gameObj = gameObject();
//     for (let gameKey in gameObj){
//         let teamObj = gameObj[gameKey];
//         for (let teamKey in teamObj){
//             let playersObj = teamObj["players"];
//             for (let playersKey in playersObj){
//                 if (playersKey === playerName){
//                     return playersObj[playersKey]["shoe"];
//                 }
//             }
//         }
//     }
// }

//console.log(shoeSize("Brendan Haywood"));

function shoeSize(playerName) {
    const gameObj = gameObject();
    if (gameObj["home"]["players"][playerName]) 
        return gameObj["home"]["players"][playerName]["shoe"];
    
    else 
        return gameObj["away"]["players"][playerName]["shoe"];
}

console.log(shoeSize("Brendan Haywood"));

function teamColors(teamName){
    const gameObj = gameObject(); //assign game object to a variable
    for (let gameKey in gameObj){ //iterating over first level of keys
        let teamObj = gameObj[gameKey]; //creating team object
        for (let teamKey in teamObj){ //iterating over second level of keys
            if (teamObj["teamName"] === teamName) {
                return teamObj["colors"];
            }
        }
    }
}

//console.log(teamColors("Charlotte Hornets"));

function teamNames(){
    const gameObj = gameObject();
    const teamNamesArray = [];
    for (let gameKey in gameObj){
        let teamObj = gameObj[gameKey];
        for (let teamKey in teamObj){
            if (teamKey === "teamName"){
                teamNamesArray.push(teamObj["teamName"]);
            }
        }
    }
    return teamNamesArray;
}

//console.log(teamNames());

function playerNumbers(teamName){
    const gameObj = gameObject(); //assigning game object to a variable
    const jerseyNumbersArray = []; //initialising empty array
    for (let gameKey in gameObj){
        let teamObj = gameObj[gameKey];
        for (let teamKey in teamObj){
            if (teamObj[teamKey] === teamName){ 
                let playersObj = teamObj["players"];
                for (let playersKey in playersObj){
                    //console.log(playersKey);
                    let playerObj = playersObj[playersKey];
                    jerseyNumbersArray.push(playerObj["number"]);
                }
            }
        }
    }
    return jerseyNumbersArray;
}

//console.log(playerNumbers("Charlotte Hornets"));

function playerStats(playerName){
    const gameObj = gameObject();
    for (let gameKey in gameObj){
        let teamObj = gameObj[gameKey];
        for (let teamKey in teamObj){
            let playersObj = teamObj["players"];
            for (let playersKey in playersObj){
                if (playersKey === playerName){
                    return playersObj[playerName];
                }
            }
        }
    }
}

//console.log(playerStats("Brendan Haywood"));

function bigShoeRebounds(){
    const gameObj = gameObject();
    let maxShoe = 0;
    let playerName = "";
    let rebounds = 0;

    for (let gameKey in gameObj){
        let teamObj = gameObj[gameKey];
        for (let teamKey in teamObj){
            let playersObj = teamObj["players"];
            for (let playersKey in playersObj){
                let playerObj = playersObj[playersKey];
                if (playerObj["shoe"] > maxShoe){
                    maxShoe = playerObj["shoe"];
                    playerName = playersKey;
                    //console.log(playersObj[playerName]);
                    rebounds = playersObj[playerName]["rebounds"];
                }
            }
        }
    }
    return rebounds;

}

console.log(bigShoeRebounds());

/// Bonus Questions ///
function mostPointsScored(){
    const gameObj = gameObject();
    let maxScore = 0;
    let playerName = "";

    for (let gameKey in gameObj) {
        let teamObj = gameObj[gameKey];
        for (let teamKey in teamObj){
            let playersObj = teamObj["players"];
            for (let playersKey in playersObj){
                let playerObj = playersObj[playersKey];
                if (playerObj["points"] > maxScore){
                    maxScore = playerObj["points"];
                    playerName = playersKey;
                }
            }
        }
    }
    return playerName;
}

console.log(mostPointsScored());

//bon, on fait quoi?
//initialise two variables: winningTeamScore and winningTeam
//iterate as uz
function winningTeam(){
    const gameObj = gameObject();
    let winningScore = 0;
    let winningTeam = "";

    for (let gameKey in gameObj){
        let teamObj = gameObj[gameKey];
        let teamScore = 0;
        for (let teamKey in teamObj){
            let currentTeamName = teamObj["teamName"];
            let playersObj = teamObj["players"];
            for (let playersKey in playersObj){
                let playerObj = playersObj[playersKey]; //retrieve every player object
                teamScore += playerObj["points"];
            }
            if (teamScore > winningScore) {
                winningScore = teamScore;
                winningTeam = currentTeamName;
            }
        }
    }
    return winningTeam;
}

console.log(winningTeam());


function playerWithLongestName(){
    const gameObj = gameObject();
    let nameLength = 0;
    let playerWithLongestName = "";

    for (let gameKey in gameObj) {
        let teamObj = gameObj[gameKey];
        for (let teamKey in teamObj) {
            let playersObj = teamObj["players"];
            for (let playersKey in playersObj){
                let playerName = playersKey;
                if (playerName.length > nameLength){
                    nameLength = playerName.length;
                    playerWithLongestName = playerName;
                }
            }
        }
    }
    return playerWithLongestName;
}

console.log(playerWithLongestName());

//// Super Bonus ////
function doesLongNameStealATon(){
    const playerLongName = playerWithLongestName();
    
    const gameObj = gameObject();
    let maxSteals = 0;

    for (let gameKey in gameObj) {
        let teamObj = gameObj[gameKey];
        for (let teamKey in teamObj){
            let playersObj = teamObj["players"];
            for (let playersKey in playersObj){
                let playerObj = playersObj[playersKey];
                if (playerObj["steals"] > maxSteals){
                    maxSteals = playerObj["steals"];
                    if (playersKey === playerLongName){
                        return true;
                    }
                }
            }
        }
    }
    return false;
}

console.log(doesLongNameStealATon());