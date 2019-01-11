const fs   = require('fs');
const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/' || req.url === '/index') {
        res.writeHead(200, {'Content-Type': 'text/html, charset=utf-8'});
        const myReadShort = fs.createReadStream(__dirname + '/html.html', 'utf8');
        myReadShort.pipe(res);
    } else if (req.url === '/about') {
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        fs.createReadStream(__dirname + '/about.html', 'utf8').pipe(res);
    } else {
        res.writeHead(404, {'Content-Type': 'text/html; charset=uft-8'});
        fs.createReadStream(__dirname + '/404error.html', 'utf8').pipe(res);
    }
});

server.listen(3000, 'localhost');
console.log('Server has been run on the port :3000');
