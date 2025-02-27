const mongoose = require("mongoose");
const EmpSchema = new mongoose.Schema({
    name:String,
    city:String,
    email:String,
    password:String
})

module.exports = mongoose.model("mern",EmpSchema)