const express = require("express");
const route = express.Router();
const  UserControllers = require("../controllers/UserControllers")


route.post("/insert" ,UserControllers.datasev);
route.get("/display" ,UserControllers.display);


module.exports = route;