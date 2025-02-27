const StuModel= require("../models/studentModel");
const dataSave=async(req, res)=>{
    const { empno, name, desig, sal} = req.body;
 const Data= await  StuModel.create({
        empno:empno,
        name:name,
        desig:desig,
        sal:sal
       })
res.send(Data);
}
const dataDisplay=async(req, res)=>{
           const Data=await    StuModel.find();
           res.send(Data);
}
const dataSearch=async(req, res)=>{
  const { sturno } =req.body;
  const Data=await   StuModel.find({rollno:sturno});
  res.send(Data);
}
module.exports={
    dataSave,
    dataDisplay,
    dataSearch
}