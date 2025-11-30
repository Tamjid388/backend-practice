import http,{ IncomingMessage, Server, ServerResponse } from "http";
import path from "path";
import config from "./config";



const server:Server=http.createServer((req:IncomingMessage,res:ServerResponse)=>{
console.log("Server Is running ");


if(req.url==="/" && req.method==="GET"){
    res.writeHead(200,{
        "content-type":"application/json"
    })
    res.end(JSON.stringify({
        message:"Hello from nodejs with typescript server",
        path:req.url
    }))

}
// users route
if(req.url==="/api/users" && req.method==="POST"){

const user={
    id:"02",
    name:"John",

}

   res.writeHead(200,{
        "content-type":"application/json"
    })
    res.end(JSON.stringify(user))

}





})

server.listen(config.port,()=>{
    console.log(`Server is running on port ${config.port}`);
})