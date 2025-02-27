const mongoose = require("mongoose");
const EmpSchema = new mongoose.Schema({
    empno:String,
    name:String,
    desig:String,
    salary:Number
})

module.exports = mongoose.model("Employee",EmpSchema);