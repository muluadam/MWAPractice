const games=require("../data/games.json");

module.exports.gamesGetAll=function(req,res){
console.log("getting all games ")
    res.status(200).json(games);

}

module.exports.gamesGetOne=function(req,res){
    console.log("getting all games ");
    const gameId=req.params.gameId;

    const theGame=gamesData[gameId];
        res.status(200).json(theGame);
    
    }