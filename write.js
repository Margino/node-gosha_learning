const fs = require('fs');

const file_readed = fs.readFileSync('text.txt', 'utf8');
const message     = `Hello World! \n${file_readed}`;

// sync
fs.writeFileSync('some_new_file.txt', message);

// async

fs.writeFile('some.txt', message, (err) => {
    console.log('File has been written');
});
console.log('Test');
