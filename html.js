const fs   = require('fs');
const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-type': 'text/html, charset=uft-8'});
    const myReadShort = fs.createReadStream(__dirname + '/html.html', 'utf8');
    myReadShort.pipe(res);
});

server.listen(3000, 'localhost');
console.log('Server has been run on the port :3000');
