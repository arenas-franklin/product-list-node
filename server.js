const express  = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// Iniciando a App
const app = express();
app.use(express.json());

//Iniciando o DB
mongoose.connect("mongodb://localhost:27017/nodeapi", {  'useUnifiedTopology': true,  'useNewUrlParser': true }).then(()=>{
    console.log("MongoDb Conectado ...")
}).catch((err)=>{
    console.log("Houve um erro ao se conectar ao mongoDB: " + err)
});

requireDir("./src/models");


//Rotas
app.use('/api', require("./src/routes"));

app.listen(3001);