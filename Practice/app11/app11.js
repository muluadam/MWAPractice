const express= require("express");
require("dotenv").config();
const path = require("path");

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
//app.use("pages")

const server=app.listen(process.env.PORT,function(req, res){
    console.log("Listening to port", server.address().port);
});


/**
 * The get("/") mehtod willbe overriden by the express  and will no longer equreied 
 */
// app.get("/",function(req,res){
//     console.log("get REcived");
//   //  res.status(404).send("Not found");
//   res.status(200).send("Home Page");

// });

app.get("/json",function(req,res){
    res.status(200).send({"jsonData":true});
});


app.get("/file",function(req,res){
    console.log("__dirname",__dirname);
console.log(__dirname);
res.status(200).sendFile(path.join(__dirname,"app11.js"));
});

/** TODO: 
 * Adding more function violates single responsiblity priciple...every file should work on only single function. 
 */