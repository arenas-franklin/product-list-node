const express  = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// Iniciando a App
const app = express();

//Iniciando o DB
mongoose.connect("mongodb://localhost:27017/nodeapi", {  'useUnifiedTopology': true,  'useNewUrlParser': true }).then(()=>{
    console.log("MongoDb Conectado ...")
}).catch((err)=>{
    console.log("Houve um erro ao se conectar ao mongoDB: " + err)
});

requireDir("./src/models");

const Product = mongoose.model('Product');

//Primeira rota
app.get('/', (req, res)=>{
    Product.create({
        title: 'React native',
        description: 'Biuld native aps width react',
        url: 'https://github.com/facebook/react-native'
    });

    return res.send('hello world! com nodemon')
});

app.listen(3001);