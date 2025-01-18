const fs = require("fs");

fs.rename("ranu.txt", "seeta.txt", (err)=>{
    if (err) throw err;

    console.log("file renamed")
})