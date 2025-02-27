const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const bodyparser = require("body-parser");
const EmpRoute = require("./routes/empRoute")

app.use(cors());
app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())

mongoose.connect("mongodb://127.0.0.1:27017/EmpDB")
.then(()=>{console.log("connected database")})


app.use("/employee", EmpRoute);

app.listen(8000,()=>{
    console.log("server on")
})