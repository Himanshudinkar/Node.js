const express = require("express");
const route = express.Router();

route.get("/location", (req, res)=>{
    res.send("This is location pagee");
})

route.get("/sales", (req, res)=>{
    res.send("This is sales pagee");
})


route.get("/stock", (req, res)=>{
    res.send("This is stock pagee");
})

route.get("/price", (req, res)=>{
    res.send("This is price pagee");
})

module.exports = route