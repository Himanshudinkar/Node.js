const express = require("express");
const route = express.Router();
const stuController = require("../controllers/stuController")

route.post("/save",stuController.saveData)
route.get("/home", stuController.display)
route.get("/display", stuController.insert)
route.post("/search",stuController.search)

module.exports = route;