const express = require("express");
const app = express();
const cors = require("cors")


app.use(cors())



// app.get("/home", (req,res)=>{

//     const status = false;

//     if(status)
//     {
//         console.log("home send")
//         res.status(200).send("home page")
//     }
//     else
//     {
//         res.status(401).send("home page error")
//     }
    
    
// })

app.get("/home", async(req,res)=>{
    try {
        console.log("home data");
        throw new Error("home page error");
        res.status(200).send("home run");
    } catch (error) {
        res.status(400).send({ms:"server not rum"})
    }
})


app.listen(8000,()=>{
    console.log("Server On")
});