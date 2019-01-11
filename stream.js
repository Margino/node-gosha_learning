const fs = require('fs');

const myReadShort = fs.createReadStream(__dirname + '/article.txt', 'utf8');
const myWriteShort = fs.createWriteStream(__dirname + '/new-article.txt');

myReadShort.on('data', (chunc, err) => {
    if (err) return console.log('An error ocured: ', err);
    console.log('New data has been resived');
    myWriteShort.write(chunc);
});
