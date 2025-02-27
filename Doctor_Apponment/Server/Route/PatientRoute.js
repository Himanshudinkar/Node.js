const express = require("express");
const route = express.Router();
const PatientControllers = require("../Controllers/PatientControllers")

route.get("/showdoctor" , PatientControllers.showdoctor)
route.post("/aptsave",PatientControllers.aptsave)


module.exports = route