const fs = require('fs');

// sync
const file_readed = fs.readFileSync('text.txt', 'utf8');
// console.log(file_readed);

// async

const filre_reqded_async = fs.readFile('text.txt', 'utf8', (err, data) => {
    console.log(data);
});

console.log('Test');
