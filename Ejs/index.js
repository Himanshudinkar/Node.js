const express = require("express");
const app = express();
const studentRoute = require("./Route/studentRoute")

app.set("view engine", "ejs");


app.use("/student", studentRoute);

app.listen(8000, ()=>{
    console.log("server on");
})