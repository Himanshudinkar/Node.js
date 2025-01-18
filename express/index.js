const express = require("express");
const app = express();




app.get("/",(req, res) =>{

    res.send("Hello we lern MERN stack");
});

app.get("/home" , (req, res) =>{
    res.send("Hello i am himanshu");
});


app.post("/database", (req, res)=>{
    res.send("This is post page");
});



app.listen(8000, ()=>{
    console.log("server on")
})