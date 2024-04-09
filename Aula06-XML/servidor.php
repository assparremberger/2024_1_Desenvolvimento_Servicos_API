<?php

    header("Content-type: application/xml; charset='UTF-8' ");

    $xml = '<?xml version="1.0" encoding="UTF-8" ?>';

    if( isset( $_REQUEST["buscar"]) ){
        try{
            $conn = mysqli_connect("localhost", "root", "", "loja");
            if( $conn ){
                $result = mysqli_query($conn, "SELECT * FROM produto");
                
                $xml .= "<lista_produtos>"; 

                while( $prod = mysqli_fetch_array($result) ){
                    $xml .= '<produto>';
                    $xml .= '   <id>'.$prod["id"].'</id>';
                    $xml .= '   <nome>'.$prod["nome"].'</nome>';
                    $xml .= '   <preco>'.$prod["preco"].'</preco>';
                    $xml .= '   <qtd>'.$prod["quantidade"].'</qtd>';
                    $xml .= '   <categoria>'.$prod["codCategoria"].'</categoria>';
                    $xml .= '</produto>';
                }
                $xml .= "</lista_produtos>";
                mysqli_close($conn);

                echo $xml;

            }else{
                $xml .= '<resposta>Erro ao conectar com o Banco de dados</resposta>" }';
                echo $xml;
            }
        }catch(\Throwable $th){
            $xml .= '<resposta>Erro ao consultar o Banco de dados</resposta>" }';
            echo $xml;
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


    if( isset( $_REQUEST["inserir"]) ){
        try{
            $conn = mysqli_connect("localhost", "root", "", "loja");
            if( $conn ){
                $nome = $_POST["nome"];
                $preco = $_POST["preco"];
                $qtd = $_POST["qtd"];
                $sql = "INSERT INTO produto (nome, preco, quantidade) VALUES 
                            ( '$nome' , $preco , $qtd ) ";
                $result = mysqli_query($conn, $sql );
                mysqli_close($conn);
                if( $result > 0 )
                    echo '{ "resposta" : "Produto inserido com sucesso" }';
                else
                    echo '{ "resposta" : "Erro ao inserir o produto" }';
            }else{
                echo '{ "resposta" : "Erro ao conectar com o Banco de dados" }';
            }
        }catch(\Throwable $th){
            echo '{ "resposta" : "Erro ao consultar o Banco de dados" }';
        }
        
    }