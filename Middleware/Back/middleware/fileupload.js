const filemiddle = (req,res,next) =>{
    console.log("outer middleware");
    next();
}

const images = (req,res,next) =>{
    console.log("midllewere2");
    next();
}

module.exports = {
    filemiddle,
    images
}