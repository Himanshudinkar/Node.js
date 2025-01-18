const express = require("express");
const app = express();
const port = 9000;

app.get("/student/home",(req,res) =>{
    res.send("this is student home page");
})

app.get("/student/about",(req,res) =>{
    res.send("this is student about page");
})


app.get("/student/fees",(req,res) =>{
    res.send("this is student fees page");
})


app.get("/teacher/home",(req,res) =>{
    res.send("this is teacher home page");
})


app.get("/teacher/about",(req,res) =>{
    res.send("this is teacher about page");
})


app.get("/teacher/dept",(req,res) =>{
    res.send("this is teacher dept page");
})

app.listen(port, ()=>{
    console.log(`server on ${port}`)
})