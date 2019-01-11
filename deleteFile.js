const fs = require('fs');

// fs.unlinkSync('file.txt');

fs.unlink('file.txt', (err) => {
    if (err) {
        console.log('An error ocure: ', err);
    }
});
