const mongoose= require("mongoose");

const stuSchema=new mongoose.Schema({
    empno:Number,
    name:String,
    desig:String,
    sal:Number
})

module.exports= mongoose.model("Himanshu", stuSchema);