const express= require("express");

const controllerGames=require("./api/controllers/games.controller")

const router= express.Router();
router.route("/json" )
.get(controllerGames.gamesGetAll())
.post(function(req, res){

});

router.get("/api")
.get(function(req, res){

}).post(function(req,res){

});

module.exports=router;