const express = require("express");
const route = express.Router();
const EmpController = require("../Controllers/EmpController")

route.post("/insert", EmpController.EmpInsert);
route.post("/login", EmpController.empLogin);

module.exports = route