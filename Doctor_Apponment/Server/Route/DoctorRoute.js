const express = require("express");
const route = express.Router();
const DoctorController = require("../Controllers/DoctorControllers")

route.post("/registration",DoctorController.registration)
route.get("/displaydata" , DoctorController.displaydata)
route.post("/searchdoctor",DoctorController.searchdoctor)
route.post("/login",DoctorController.login)

module.exports = route