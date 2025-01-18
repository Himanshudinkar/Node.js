const http = require("http");
const detail = require("./employee.js")


http.createServer(function(req,res){
    res.write(detail.empDetail());
    res.write(detail.empSalary());
    res.write(detail.workExperiance());
    res.end()
}).listen(8080,()=>{
    console.log("on");
    
});