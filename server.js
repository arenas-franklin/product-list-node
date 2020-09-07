const express  = require('express');

const app = express();

app.get('/', (req, res)=>{
    res.send('hello world! com nodemon')
});

app.listen(3001);