const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const bodyparser = require("body-parser");
const EmpRoute = require("./Route/EmpRoute")

require('dotenv').config();



app.use(cors());
app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json());

mongoose.connect(process.env.DB_CONNECT)
.then(()=>{console.log("DB CONNECTED")});

app.use("/employee",EmpRoute);

const port = process.env.PORT;

app.listen(port,()=>{
    console.log("Server On")
});