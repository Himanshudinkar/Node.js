const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
    rollno:Number,
    name:String,
    city:String,
    fees:Number
})

module.exports = mongoose.model("database", contactSchema)