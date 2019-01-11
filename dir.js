const fs = require('fs');

// create
// fs.mkdir('new-one', (err) => {
//     if (err) {
//         console.log('An error ocured:', err);
//     }
// });

// remove
// fs.rmdir('new-one', (err) => {
//     if (err) {
//         console.log('An error ocured:', err);
//     }
// });


// create a dirrectory with a file
// fs.mkdir('new-one', (err) => {
//     if (err) console.log('An error ocured:', err);
//
//     fs.writeFile('./new-one/text.txt', 'Hello World!', (err) => {
//         if (err) return console.log('An error ocured', err);
//
//         console.log('The file hase been written');
//     });
// });

// delete a dirrectory with a file
fs.unlink('./new-one/text.txt', (err) => {
    if (err) return console.log('An error ocured:', err);

    fs.rmdir('new-one', (err) => {
        if (err) return console.log('An error ocured:', err);
    });
});
