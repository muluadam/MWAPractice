const express= require("express");
require("dotenv").config();
const path = require("path");

const router=require("./api/routes");

const app=express(); 

/**
 * This is a middleware that prints every navigation 
 */
//app.use("/css",funciton(req,res,next)) --------------------Logs only the CSS files 
app.use(function (req,res,next){             //--------------Logs everything 
    console.log(req.method,req.url);
    next(); 
});


/**
 * Bothe path.join and  without join it works well
 */
//app.use(express.static(path.join(__dirname ,process.env.PUBLIC)));
app.use(express.static( process.env.PUBLIC_FOLDER));


const server=app.listen(process.env.PORT,function(req, res){
    console.log("Listening to port", server.address().port);
});
 

//app.use("/",router);
app.use("/api",router);
 
 