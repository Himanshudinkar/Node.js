const EmpModel = require("../Models/EmpModel")

const EmpInsert = async (req,res) =>{

    const {email,password,name,city} = req.body;
    const Data = await EmpModel.create({

        email:email,
        password:password,
        name:name,
        city:city
    })
    res.send(Data)

}


const empLogin=async(req, res)=>{
  const { email, password }= req.body;
 try {
      const Employee = await  EmpModel.findOne({email:email}); 
      
      if (!Employee)
      {
        res.status(400).send({msg:"Invalid Email!"});
      }

      if (Employee.password!=password)
      {
        res.status(400).send({msg:"Invalid Password!"});
      }
 
      res.status(200).send(Employee);

 } catch (error) {
     console.log(error);
 }
}

module.exports = {
    EmpInsert,
    empLogin
}