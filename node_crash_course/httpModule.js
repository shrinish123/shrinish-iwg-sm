// This module helps to create a node sever with node js

const http = require('http');
const server = http.createServer((request,response)=>{
    if(request.url === '/')
    {
        response.write('Hello World ');
        response.end();
    }
    else{
        response.write('This site is not reachable');
        response.end();
    }
});


server.listen('3000');



