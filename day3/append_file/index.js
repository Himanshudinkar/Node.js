const fs = require("fs");

fs.appendFile("him.pdf", " welcome himanshu dinkar (bhopal madhya pradesh)", (err)=>{
    if (err) throw err;
    console.log("file created");
})