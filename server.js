const { read } = require('fs');
const http = require('http');
const fs = require('fs');
const _ = require('lodash');//npm install to install all dependencies

const HTTP_PORT = process.env.PORT || 3000;

const server = http.createServer((req,res) =>{

    //All paths
    let path = './views/';
    switch(req.url){
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
        case '/about-me':
            res.statusCode = 301;//resource had been moved
            res.setHeader('Location', '/about');
            res.end();
            break;
        default:
            path += '404.html';
            res.statusCode = 404;
            break;
    }

    //sends an html file
    fs.readFile(path, (err, data) =>{
        if(err){
            console.log(err);
            res.end();
        }
        else{
            res.end(data);//pass data if only loading one thing
        }
    });
    res.setHeader('Content-Type', 'text/html');
});

server.listen(HTTP_PORT, 'localhost', ()=>{
});