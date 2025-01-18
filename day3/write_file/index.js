const fs = require("fs");

fs.writeFile("ranu.doc", "khandan", (err)=>{
    if (err) throw err;

    console.log("file created!!")
}) 