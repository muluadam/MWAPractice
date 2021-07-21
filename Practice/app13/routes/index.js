const express= require("express");

const router= express.Router();
router.route("/json" )
.get(function(req, res){
    res.status(200).send({"jsonData1":true});
})
.post(function(req, res){

});

router.get("/api")
.get(function(req, res){

}).post(function(req,res){

});

module.exports=router;