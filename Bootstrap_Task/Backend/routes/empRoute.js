const express = require("express");
const route = express.Router();
const EmpControllrs = require("../controllers/empControllers")

route.post("/insert", EmpControllrs.EmpInsert);
route.get("/display", EmpControllrs.EmpDisplay);
route.post("/search", EmpControllrs.EmpSearch);
route.get("/delete", EmpControllrs.EmpDelete);
route.post("/editdata", EmpControllrs.EmpEdit);
route.post("/editdatasave", EmpControllrs.EmpSave);

module.exports = route;