const knex = require("knex")
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
        database : ''
    }
})