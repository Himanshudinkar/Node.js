const express = require("express");
const route = express.Router();
const studentController = require("../Controller/studentControler")


route.get("/homepage", studentController.homepage);
route.get("/aboutstu", studentController.aboutstu);
route.get("/courses", studentController.course);
route.get("/ourfees", studentController.ourfees);

module.exports = route