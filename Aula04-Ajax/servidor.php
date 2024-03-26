<?php
    $numero = $_GET["numero"];
    $resposta = "";
    for( $i = 1 ; $i <= $numero ; $i++){
        $resposta .= "<br>".$i;
    }
    echo $resposta;