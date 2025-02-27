const homepage = (req,res) =>{
    res.send("welcome home page");
}

const aboutstu = (req,res) =>{
    res.send("welcome about page");
}

const course = (req,res) =>{
    res.send("welcome course page");
}

const ourfees = (req,res) =>{
    res.send("welcome fees page");
}

module.exports = {
    homepage,
    aboutstu,
    course,ourfees
}