// file-system - core node module (packages that already comes with node)
const fs = require('fs');
const http = require('http');
const port = process.env.PORT || 3000;
const ip = process.env.IP || '127.0.0.1';
const url = require('url');

// load a file asyncronously
const json = fs.readFileSync(`${__dirname}/data/data.json`, 'utf-8');
const laptopData = JSON.parse(json); // parses the json and return a JS object

// create a server
const server = http.createServer((req, res) => {
    // retriving url values
    const pathName = url.parse(req.url, true).pathname; 
    const id = url.parse(req.url, true).query.id;

    // simple routing
    if(pathName === '/products' || pathName === '/') {
        res.writeHead(200, { 'Content-type': 'text/html' }); // tells the browser what type of data the server is sending 
        res.end('PRODUCTS PAGE');
    } 
    else if (pathName === '/laptop' && id < laptopData.length) {
        res.writeHead(200, { 'Content-type': 'text/html' }); // tells the browser what type of data the server is sending 
        res.end(`LAPTOP PAGE for laptop: ${id}`);
    }
    else {
        res.writeHead(404, { 'Content-type' : 'text/html'});
        res.end('404 PAGE NOT FOUND');
    }
});

//  listening for requests
server.listen(port, ip, (req, res) => {
    console.log(`Server is running at port: ${port}`);
    console.log(`Local IP is: ${ip}`);
});