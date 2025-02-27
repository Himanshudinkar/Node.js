const express = require("express");
const route = express.Router();

route.get("/home", (req, res)=>{
    res.send("This is home pagee");
})

route.get("/about", (req, res)=>{
    res.send("This is about pagee");
})


route.get("/dept", (req, res)=>{
    res.send("This is dept pagee");
})

route.get("/salary", (req, res)=>{
    res.send("This is salary pagee");
})

module.exports = route