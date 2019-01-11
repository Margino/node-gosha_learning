const fs   = require('fs');
const http = require('http');

// const myReadShort  = fs.createReadStream(__dirname + '/article.txt', 'utf8');
// const myWriteShort = fs.createWriteStream(__dirname + '/news.txt');

// myReadShort.pipe(myWriteShort);

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-type': 'text/plain, charset=uft-8'});
    const myReadShort = fs.createReadStream(__dirname + '/article.txt', 'utf8');
    myReadShort.pipe(res);
});

server.listen(3000, 'localhost');
console.log('Server has been run on port 3000');
