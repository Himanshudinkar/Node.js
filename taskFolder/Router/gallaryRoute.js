const express = require("express");
const Route = express.Router();

Route.get("/stugallery",(req,res)=>{
    res.send("this is stugallery page");
})

Route.get("/companyimages",(req,res)=>{
    res.send("this is companyimages page");
})

Route.get("/manageportfolio",(req,res)=>{
    res.send("this is portfolio page");
})

Route.get("/productimages",(req,res)=>{
    res.send("this is productimages page");
})

module.exports = Route