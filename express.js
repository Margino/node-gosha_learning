const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('This is home page');
});

app.get('/:category/:id', (req, res) => {
    res.send(`Category is ${req.params.category}, id is ${req.params.id}`);
});

app.listen(3000);
console.log('The server has been run on the port 3000');
