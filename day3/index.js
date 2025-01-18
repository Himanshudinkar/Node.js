const http = require("http");
const fs = require("fs");

http.createServer((req,res)=>{
    fs.readFile("him.txt" , (err,data) =>{
        if (err) throw err;
        res.write(data);
        res.end()
    })
}).listen(8000);