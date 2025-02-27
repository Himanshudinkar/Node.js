const express = require("express")
const app = express();

// Body-parser middleware
const bodyparser = require('body-parser')
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())

const cors = require("cors")
app.use(cors());
// CORS (Cross-Origin Resource Sharing) is essential for allowing requests from different origins.

const mongoose = require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/FirstData")
.then((res)=>{
    console.log("connected");
})

const stuRoute = require("./Routes/stuRoute")

app.use("/student",stuRoute);

app.listen("8080",()=>{
    console.log("server on")
})
