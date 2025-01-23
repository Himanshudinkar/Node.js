const collageModel = require("../model/collageModel")

const homePage = (req,res) =>{
    res.render("index")
}

const aboutPage = (req,res) =>{
    res.render("about")
}
const coursePage = (req,res) =>{
    res.render("course")
}


const facultyPage = (req,res) =>{
    res.render("faculty")
}

const contactPage = (req,res) =>{
    res.render("contact")
}

const stuSave = async(req,res)=>{
    const {rollno, name, city, fees} = req.body;
    const Data = await collageModel.create({
        rollno:rollno,
        name:name,
        city:city,
        fees:fees
    })
    res.render("contact")
}

module.exports = {
    homePage,
    aboutPage,
    coursePage,
    facultyPage,
    contactPage,
    stuSave
}