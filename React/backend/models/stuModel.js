const mongoose = require("mongoose");
   const stuSchema =mongoose.Schema({
  rollno:Number,
  name:String,
  city:String,
  fees:Number
});

module.exports = mongoose.model("firstRecord",stuSchema);