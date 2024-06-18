var knex = require("knex")
const restify = require("restify")
const errors = require("restify-errors")

const server = restify.createServer({
    name : 'lojinha' ,
    version : '1.0.0'
})

server.use( restify.plugins.acceptParser(server.acceptable) )
server.use( restify.plugins.queryParser() )
server.use( restify.plugins.bodyParser() )

server.listen( 8001 , function() {
    console.log("%s executando em %s", server.name, server.url)
})

knex = require('knex')({
    client : 'mysql' ,
    connection : {
        host : 'localhost' ,
        user : 'root' ,
        password : '' ,
        database : 'lojinha_2024_1'
    }
})

server.get( '/' , (req, res, next) =>{
    res.send("Bem-vindo(a) à API da Lojinha")
} )

server.get( '/categoria' , (req, res, next) => {
    knex('categoria').then( (dados) => {
        res.send( dados )
    }, next)
})

server.get( '/categoria/:idCategoria' , (req, res, next) => {
    const idCat = req.params.idCategoria
    knex('categoria')
    .where( 'id' , idCat)
    .first()
    .then( (dados) => {
        if( !dados || dados == "" ){
            return res.send(
                new errors.BadRequestError('Categoria não encontrada')
            )
        }
        res.send( dados )
    }, next)
})

server.post( '/categoria' , (req, res, next) => {
    knex('categoria')
    .insert( req.body )
    .then( (dados) => {
        res.send( dados )
    }, next)
})

server.put( '/categoria/:idCategoria' , (req, res, next) => {
    const idCat = req.params.idCategoria
    knex('categoria')
    .where( 'id' , idCat)
    .update( req.body )
    .then( (dados) => {
        if( !dados ){
            return res.send(
                new errors.BadRequestError('Categoria não encontrada')
            )
        }
        res.send( "Produto Atualizado" )
    }, next)
})

server.del( '/categoria/:idCategoria' , (req, res, next) => {
    const idCat = req.params.idCategoria
    knex('categoria')
    .where( 'id' , idCat)
    .delete()
    .then( (dados) => {
        if( !dados ){
            return res.send(
                new errors.BadRequestError('Categoria não encontrada')
            )
        }
        res.send( "Produto Excluído" )
    }, next)
})


server.get( '/produto' , (req, res, next) => {
    const idCat = req.params.idCategoria
    knex('produto')
    .join("categoria", "produto.codCategoria", "=" , "categoria.id")
    .select("produto.id" , "produto.nome", 
            "produto.preco", "categoria.nome AS cat")
    .then( (dados) => {
        if( !dados || dados == "" ){
            return res.send(
                new errors.BadRequestError('Produto não encontrado')
            )
        }
        res.send( dados )
    }, next)
})

server.put( '/produto/:idProduto' , (req, res, next) => {
    const idProd = req.params.idProduto
    knex('produto')
    .where( 'id' , idProd)
    .update( req.body )
    .then( (dados) => {
        if( !dados ){
            return res.send(
                new errors.BadRequestError('Produto não encontrado')
            )
        }
        res.send( "Produto Atualizado" )
    }, next)
})

server.post( '/produto' , (req, res, next) => {
    knex('produto')
    .insert( req.body )
    .then( (dados) => {
        res.send( dados )
    }, next)
})


server.del( '/produto/:idProduto' , (req, res, next) => {
    const idProd = req.params.idProduto
    knex('produto')
    .where( 'id' , idProd)
    .delete()
    .then( (dados) => {
        if( !dados ){
            return res.send(
                new errors.BadRequestError('Categoria não encontrada')
            )
        }
        res.send( "Produto Excluído" )
    }, next)
})