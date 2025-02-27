const express = require("express");
const app = express();
const cors = require("cors")
const filemidlle = require("./middleware/fileupload")

app.use(cors())

app.use((req,res,next)=>{
    console.log("midddleware");
    req.name = "himanshu";
    next();
})

app.get("/home", (req,res)=>{
    console.log("home send")
    res.send("home page")
    console.log(req.name)
})

app.get("/employee", filemidlle.filemiddle,filemidlle.images, (req,res)=>{
    console.log("about send")
    res.send("about page")
})

app.listen(8000,()=>{
    console.log("Server On")
});