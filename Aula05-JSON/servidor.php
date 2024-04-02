<?php

    header("Content-type: aplication/json");

    if( isset( $_REQUEST["buscar"]) ){
        try{
            $conn = mysqli_connect("localhost", "root", "", "loja");
            if( $conn ){
                $result = mysqli_query($conn, "SELECT * FROM produto");
                $linhas = array();
                while( $row = mysqli_fetch_assoc($result) ){
                    $linhas[] = $row;
                }
                mysqli_close($conn);

                echo '{ "produtos" : '.json_encode( $linhas ).' }';

            }else{
                echo '{ "resposta" : "Erro ao conectar com o Banco de dados" }';
            }
        }catch(\Throwable $th){
            echo '{ "resposta" : "Erro ao consultar o Banco de dados" }';
        }
        
    }


    if( isset( $_REQUEST["excluir"]) ){
        try{
            $conn = mysqli_connect("localhost", "root", "", "loja");
            if( $conn ){
                $id = $_GET["id"];
                mysqli_query($conn,"DELETE FROM produto WHERE id = $id");
                mysqli_close($conn);
                echo '{ "resposta" : "Produto Excluído com sucesso" }';
            }else{
                echo '{ "resposta" : "Erro ao conectar com o Banco de dados" }';
            }
        }catch(\Throwable $th){
            echo '{ "resposta" : "Erro ao consultar o Banco de dados" }';
        }
        
    }