const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

const mysql = require('mysql');

var conn = mysql.createConnection({
    host : 'localhost' ,
    user : 'root' ,
    password : '' ,
    database : 'loja'
});

const server = http.createServer((req, res)=>{
    res.statusCode = 200;
    // res.setHeader( 'Content-type' , 'application/json' );
    res.setHeader( 'Content-type' , 'text/plain' );

    conn.connect( function(erro){
        if( !erro ){
            sql = "SELECT * FROM produto ORDER BY nome";
            conn.query( sql , function(err , result, fields){
                if( !err ){
                    res.end( JSON.stringify(result) );
                    //res.end( result );
                }else{
                    res.end('{ "resposta" : "Erro na consulta" }');
                }
            } );
        }else{
            res.end('{ "resposta" : "Erro na conexão" }');
        }
    });

});


server.listen( port , hostname , ()=>{
    console.log(`Servidor sendo executado em http://${hostname}:${port}/`); 
} );