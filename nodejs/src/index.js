'use strict'
const express = require('express')
const app = express()
app.get('/',(req,res) => {
    res.json({message:"Hola, primera vez usando nodejs y express, soy el mejor"})
})

app.listen(3001,() => {
    console.log('Iniciando server en el puerto 3000')
})

for (var i=0; i<10; i++) {
    console.log('Ejemplo ', i, ' de un ciclo for en javascript')
}

/* Sirve para ejecutar instrucciones con un retardo en milisegundos:
global.setInterval(function() {
    console.log('Hola NodeJS')
}, 1000)
*/