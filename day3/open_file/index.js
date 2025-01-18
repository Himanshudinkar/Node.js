const fs = require("fs");

fs.open("ram.txt", "w", (err,file) =>{
    if(err) throw err;

    console.log("file created!!")
})