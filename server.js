const { read } = require('fs');
const http = require('http');
const fs = require('fs');
const _ = require('lodash');//npm install to install all dependencies

const server = http.createServer((req,res) =>{
    //console.log(req.url, req.method);

    //lodash
    const num = _.random(0, 20);
    console.log(num);

    const greet = _.once(() => {
        console.log('hello');
    }); 

    greet();
    // set header content type
    // res.setHeader('Content-Type', 'text/html');

    // res.write('<head><link rel="styleseet"></head>');
    // res.write('<p>hello world</p>');
    // res.write('<p>hello world part 2</p>');
    // res.end();

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

    //send an html file
    fs.readFile(path, (err, data) =>{
        if(err){
            console.log(err);
            res.end();
        }
        else{
            //res.write(data);
            
            res.end(data);//pass data if only loading one thing
        }
    });

    res.setHeader('Content-Type', 'text/html');

});

server.listen(3000, 'localhost', ()=>{
    console.log('listening for requests on port 3000');
});