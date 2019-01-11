const express = require('express');

const app = express();

// specify the template engine
app.set('view engine', 'ejs');

// specify statick files
app.use('/public', express.static('public'));

// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/html.html');
// });

app.get('/', (req, res) => {
    res.render('index.ejs');
});

app.get('/about', (req, res) => {
    res.render('about.ejs');
});

app.get('/news/:id', (req, res) => {
    const obj = {title: 'Title', id: 4, paragraphs: ['first', 'second', 'third']};
    res.render('news', {newsId: req.params.id, obj: obj});
});

app.listen(3000);
console.log('Server has been run on the port :3000');
