//console.log("First line on node.js");
//in bash : node app.js => First line on node.js (runtime)(on server v8)
// node.js is not a compile language it is an interpreted language

/*
const isActive =true;
if(isActive){
    
console.log("Active");
}
else{
    console.log("Inactive");

}

const array=['Omar','Rama'];
console.log(array);
*/

//npm init,npm (script name in package.json),npm i express-validator,npm init -y,npm i

//console.log("hi");

// Node.js
// 1- create server , 2- write and read files
// Create server - http
const http= require("http"); // node.js server , require(import from node), http/node:http
//console.log(http);
const server=http.createServer((req,res)=>{ //request,response
    //res.writeHead(200,{"Content-Type":"text/plain"});
    //res.end("Hello World");
    //console.log("server is running");
    const url=req.url;
    const method=req.method; 
    //console.log("hiii"); // beacause we used nodemon it will stop and run the server auto (ctrl+s) without the need to manually stop the server each timw
    // / GET => url/(hit) method
    //console.log(url,method);
    //console.log(req);
    //return;
    if(url=== "/hello"&& method==="Get"){
        res.write("Hello World");
        return res.end(); //to end an HTTP response
    }
    return res.end();
});

server.listen(8080,()=>{ // http://localhost:8080 it will still running because I didn't tell it to stop
    console.log("Server is running on port 8080");
});
