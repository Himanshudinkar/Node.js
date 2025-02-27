const DoctorModel = require("../Model/DoctorModel")




const registration =  async(req,res) =>{
const {email,Password,name,address,city,mobile,speciality} = req.body;

try{
const Data = await DoctorModel.create({
     name:name,
     address:address, 
     city:city,
     mobile:mobile,
     specailization:speciality,
     email:email,
     password: Password
})
    res.status(201).send({msg: "Doctor Register Succesfully"})
}

catch(error){
   res.status(400).send({msg:"Data Base Not Work"})
}
}


const displaydata =  async(req,res) =>{
    try {
        const Data = await DoctorModel.find();
        res.status(200).send(Data);
    } catch (error) {
        res.status(400).send({msg:"Database not Connected"})
    }
}

const searchdoctor = async(req,res) =>{
    const { name, speciality} = req.body;

    try {
        const Doctor = await DoctorModel.find({$or:[{"name":name}, {"specailization":speciality}]})
        res.status(200).send(Doctor);
    } catch (error) {
        res.status(400).send({msg:"Database Not Connect"});
    }
}

const login = async(req,res) =>{
    const { email, password } = req.body;

   try {
    const Doctor = await DoctorModel.findOne({email:email});
    if (!Doctor)
    {
      res.status(400).send({msg:"Invalid Email!"})
    }

    if (Doctor.password!=password)
    {
        res.status(400).send({msg:"Invalid Credentials!"});
    }

    res.status(200).send(Doctor);

   } catch (error) {
      console.log(error);
   }
}

module.exports ={
    registration,
    displaydata,
    searchdoctor,
    login
}