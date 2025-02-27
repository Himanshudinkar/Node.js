const express = require("express");
const app = express();
const empRoute =  require("./Routes/empRoutes");
const productRoute = require("./Routes/productRoute")

app.use("/emplloyee",empRoute);
app.use("/products",productRoute);

app.listen(8000, ()=>{
    console.log("server run on 8000 port");
})