const fs = require("fs");

fs.unlink("ranu.doc", (err)=>{
    if (err) throw err;

    console.log("file delete")
})