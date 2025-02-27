const express = require("express");
const Route = express.Router();

Route.get("/home", (req,res)=> {
    res.send("This is Home Page");
})

Route.get("/patient", (req,res)=>{
    res.send("This is patient page");
})

Route.get("/admit", (req,res)=>{
    res.send("This is Admit page");
})

Route.get("/save", (req,res)=>{
    res.send("This is Save page");
})

module.exports = Route