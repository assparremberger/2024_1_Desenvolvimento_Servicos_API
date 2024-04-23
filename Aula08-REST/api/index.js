const { json } = require('body-parser')
const express = require('express')
const app = express()
const port = 3000


produtos = ["Coca-Cola", "Pepsi", "Fanta"]

app.get('/', (req, res) => {
  res.send('Bem-vindo(a) a nossa API REST')
})

app.get('/produto', (req, res) => {
    res.send( produtos )
})

app.get('/produto/:idProd', (req, res) => {
    index = parseInt( req.params.idProd  ) - 1
    res.send( produtos[index] )
})

app.delete('/produto/:idProd', (req, res) => {
    index = parseInt( req.params.idProd  ) - 1
    produtos.splice( index, 1 )
    res.send( "Produto Removido" )
})

app.post('/produto', (req, res) => {
    nome = "Prod_"+produtos.length
    produtos.push( nome )
    res.send( "Produto " + nome + " adicionado!")
})

app.put('/produto/:idProd', (req, res) => {
    index = parseInt( req.params.idProd  ) - 1
    nome = "Prod_"+produtos.length
    produtos[index] = "Novo nome "+ produtos[index]
    res.send( "Produto alterado!")
})


app.listen(port, () => {
  console.log(`Servidor iniciado em http://localhost:${port}`)
})