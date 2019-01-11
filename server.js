const http = require('http');

const server = http.createServer((req, res) => {
    console.log(`Page url is ${req.url}`);
    res.writeHead(200, {'Content-type': 'text/plan; charset=utf-8'});
    res.end('Hello World!');
});

server.listen(3000, 'localhost');
console.log('Server has been started on port localhost:3000');
