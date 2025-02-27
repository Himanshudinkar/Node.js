const express = require("express");
const route = express.Router();
const collageControler = require("../controller/collageControler")


route.get("/home", collageControler.homePage);
route.get("/about", collageControler.aboutPage);
route.get("/course", collageControler.coursePage);
route.get("/faculty", collageControler.facultyPage);
route.get("/contact", collageControler.contactPage);
route.post("/save", collageControler.stuSave);

module.exports = route