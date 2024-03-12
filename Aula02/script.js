function validarForm(){
    conteudo = document.getElementById("txtNumero").value;
    if( isNaN( conteudo ) || conteudo < 1 || conteudo > 10 ){
        document.getElementById("info").innerHTML = "Valor não permitido";
        return false;
    }else{
        return true;
    }
}

function calcular(){
    v1 = document.getElementById("txtValor1").value;
    v2 = document.getElementById("txtValor2").value;
    if( isNaN( v1 ) || isNaN( v2 ) || v1 == "" || v2 == "" ){
        document.getElementById("result").innerHTML = 
                    "<i>Valores não permitidos</i>";
    }else{
        soma = parseFloat(v1) +  parseFloat(v2) ;
        document.getElementById("result").innerHTML = 
                    "<b>Resultado: " + soma + "</b>";
    }
}