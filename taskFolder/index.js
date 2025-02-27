const express = require("express");
const app = express();
const hospitalRoute = require("./Router/hospitalRoute");
const galleryRoute = require("./Router/gallaryRoute");

app.use("/hospital", hospitalRoute);
app.use("/gallery", galleryRoute);

app.listen(8080, ()=>{
    console.log("server on")
})