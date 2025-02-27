const stuModel = require("../models/stuModel");


const saveData = async(req,res)=>{
    
  console.log(req.body);
 const {rollno,name,city,fees} = await req.body;
 const data = stuModel.create({
  rollno:rollno,
  name:name,
  city:city,
  fees:fees
 }) 

 res.send("oky");
}

const display = (req,res)=>{
  res.send("display")
}


const insert = async (req,res) =>{
    const data = await stuModel.find();
    res.send(data);
}

const search = async (req,res) =>{
  const {sturno} = req.body;

  const Data = await stuModel.find({rollno:sturno});
  res.send(Data);
}

module.exports = {
  saveData,
  display,
  insert,
  search
}