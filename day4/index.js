const http = require("http");
const uc = require("uppercase");

http.createServer((req, res)=>{

    res.write(uc("weclom bhopal"));
    res.end();
    
}).listen(8000);