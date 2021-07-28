const express = require("express");
// const exphbs= require("express-handlebars");
 
const mongoose=require('mongoose');

const bodyParser=require("body-parser");

const app=express();
  
// app.engine("handlebars",exphbs());
// app.set("view engine","handlebars");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

const main=require("./controller/main");
const user=require("./controller/users");
app.use("/",main);
app.use("/users",user);

const server=app.listen(3001,function() {
	console.log("Server runned.");
}) 

mongoose.connect("mongodb://127.0.0.1/users",{
	useNewUrlParser:true,
	useUnifiedTopology:true
})
