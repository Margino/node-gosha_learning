const fs   = require('fs');
const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-type': 'application/json'});
    const car = {
        model: 'Audi',
        speed: 220,
        wheels: 4
    };
    res.end(JSON.stringify(car));
});

server.listen(3000, 'localhost');
console.log('Server has been run on the port :3000');
