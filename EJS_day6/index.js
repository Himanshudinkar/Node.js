const express = require("express");
const app = express();
const bodyparser = require("body-parser")
const mongoose = require("mongoose");
const collageRoute = require("./Route/collageRoute");

app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())

mongoose.connect("mongodb://127.0.0.1:27017/himanshu").then(()=>{
    console.log("connected")
}); 

app.set('view engine', 'ejs');



app.use("/collage", collageRoute);

app.listen(8000, ()=>{
    console.log("server on");
})