const homepage = (req,res) =>{
    res.render("home")
}

const aboutstu = (req,res) =>{
   res.render("about")
}

const course = (req,res) =>{
    res.render("course")
}

const ourfees = (req,res) =>{
    res.render("stufees")
}

module.exports = {
    homepage,
    aboutstu,
    course,ourfees
}