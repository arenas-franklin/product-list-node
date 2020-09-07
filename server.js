const express  = require('express');
const mongoose = require('mongoose');

// Iniciando a App
const app = express();

//Iniciando o DB
mongoose.connect("mongodb://localhost:27017/nodeapi", { useMongoClient: true }).then(()=>{
    console.log("MongoDb Conectado ...")
}).catch((err)=>{
    console.log("Houve um erro ao se conectar ao mongoDB: " + err)
});

//Primeira rota
app.get('/', (req, res)=>{
    res.send('hello world! com nodemon')
});

app.listen(3001);