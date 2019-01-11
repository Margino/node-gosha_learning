const express = require('express');

const app = express();

// specify the template engine
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/html.html');
});

app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/about.html');
});

app.get('/news/:id', (req, res) => {
    const obj = {title: 'Title', id: 4, paragraphs: ['first', 'second', 'third']};
    res.render('news', {newsId: req.params.id, obj: obj});
});

app.listen(3000);
console.log('Server has been run on the port :3000');
