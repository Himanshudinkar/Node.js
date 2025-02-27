const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const bodyparser = require("body-parser");
const DoctorRoute = require("./Route/DoctorRoute")
const PatientRoute = require("./Route/PatientRoute")
require("dotenv").config();
app.use(cors());
app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())

mongoose.connect(process.env.DBCON)
.then(()=>{console.log("connected database")})


app.use("/doctor",DoctorRoute);
app.use("/patient",PatientRoute);

const port = process.env.PORT || 8080

app.listen(port,()=>{
    console.log("server on")
})