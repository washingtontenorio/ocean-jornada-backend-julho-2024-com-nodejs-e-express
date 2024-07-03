const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

// Desafio: criar endpoint /oi que exibe "Olá, mundo!"
app.get('/oi', function (req, res) {
  res.send('Olá, mundo!')
})

// lista de personagens

const lista = ['Rick Sanchez','Morty Smith','Summer Smith']

// Read All 

app.get('/item', function(req, res){
  res.send(lista)

})

app.listen(3000)