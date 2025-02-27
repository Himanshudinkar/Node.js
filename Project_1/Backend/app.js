const express= require("express");
const app=express();
const cors=require("cors");
const bodyparser = require('body-parser')
const StuRoute= require("./routes/stuRoute");
const mongoose= require("mongoose");

app.use(cors());
// Body-parser middleware
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())
mongoose.connect("mongodb://127.0.0.1:27017/dinkar").then(()=>{
    console.log("DB connetced!!!");
})



app.use("/students", StuRoute);



app.listen(8080, ()=>{
    console.log("Server run on port 8080!");
})