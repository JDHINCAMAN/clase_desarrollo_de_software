'use strict'

const express = require('express')
const app = express()

app.get('/saludo', function(req, res) {
    res.json({message:"Saludos a nuestro desarrollador " + req.query['name'] + ' en el ciclo ' + req.query['parametro']
})
    console.log("Get 2 " + req.query['parametro'])
    console.log("Get 1 " + req.query['name'])
});

app.listen(3003,()=> {
    console.log('Iniciando saludo puerto 3003')
})

