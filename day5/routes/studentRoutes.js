const express = require("express");
const route = express.Router();

route.get("/home", (req, res)=>{
    res.send("This is home pagee");
})

route.get("/about", (req, res)=>{
    res.send("This is about pagee");
})


route.get("/course", (req, res)=>{
    res.send("This is coourse pagee");
})

route.get("/fees", (req, res)=>{
    res.send("This is fees pagee");
})

module.exports = route