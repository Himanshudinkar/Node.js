const EmpModel = require("../models/empModels")


const EmpInsert = async(req,res) =>{
const { empno,name,desig,salary} = req.body;
const Data = await EmpModel.create({
    empno:empno,
    name:name,
    desig:desig,
    salary:salary
})
res.send(Data);
} 

const EmpDisplay = async(req,res) =>{
    const Data = await EmpModel.find();
    res.send(Data);
}



const EmpSearch = async(req,res) =>{
    const { empno} = req.body;
    const Data = await EmpModel.find({empno:empno});
    res.send(Data);
}

const EmpDelete = async (req,res) =>{
    const { empid} = req.query;
    await EmpModel.findByIdAndDelete(empid);
    res.send("Data deleted!!!");
}


const EmpEdit = async (req,res) =>{
    const { empid }= req.body;
   const Data = await EmpModel.findById(empid);
   res.send(Data);
}

const EmpSave = async (req,res)=>{
    const {_id } =req.body;
  await EmpModel.findByIdAndUpdate(_id, req.body);
  res.send("Data succesfully updated!!!");
}

module.exports = {
    EmpInsert,
    EmpDisplay,
    EmpSearch,
    EmpDelete,
    EmpEdit,
    EmpSave
}