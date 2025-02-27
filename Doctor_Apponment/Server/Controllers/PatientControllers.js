const DoctorModel = require("../Model/DoctorModel")
const PatientModel = require("../Model/PatientModel")

const showdoctor = async(req,res) =>{

    const {id} = req.query;

    try {
        const Doctor = await DoctorModel.findById(id);
        res.status(200).send(Doctor);
    } catch (error) {
        res.status(400).send({msg:"Databse Not Connect"})
    }

}


const aptsave = async(req,res) =>{

    const { docid, name, city, mobile, disease,email} = req.body;

    try {

        const Doctor = await PatientModel.create({
            name:name,
            disease:disease, 
            city:city,
            mobile:mobile,
            email:email,
            doctorId:docid
        })

        res.status(200).send({msg:"Your Appointment Booked"})
        
    } catch (error) {
        
        res.status(400).send({msg:"Databse Not Connected"})
    }

}



module.exports = {
    showdoctor,
    aptsave,
    
}