function lerObjeto(){
    var carro = { modelo : "Doblo"  , ano : 2006 };
    var pessoa = {
        nome : "Maria" ,
        idade : 25 ,
        altura : 1.80 ,
        temFilhos : true ,
        endereco : null ,
        filhos : [
            { nome : "Carlos" , idade : 10 } ,
            { nome : "Júlia" , idade : 8 }
        ],
        formacao : [ 2006 , 2013 , 2017 ] ,
        veiculo : carro ,
        imprimir : function(){
            texto = this.nome + " - idade: " + this.idade +
                " - Carro: " + this.veiculo.modelo;
            return texto;
        }
    };

    pObjeto = document.getElementById("pObjeto");
    pObjeto.innerHTML = pessoa.imprimir();

}

// Construir um objeto retângulo que possui os atributos 
// largura e altura. Este objeto deverá ter um método que 
// calcula a área do retângulo.
// Crie no html, dois campos para que o usuário preencha 
// com os valores de largura e altura.
// Crie um botão que mostre o resultado par o usuário 


function calcularArea(){
    l = document.getElementById("txtLargura").value;
    a = document.getElementById("txtAltura").value;
    retangulo = {
        largura : parseFloat( l ) ,
        altura : parseFloat( a ) ,
        area : function(){
            return this.largura * this.altura;
        }
    }
    divResul = document.getElementById("result");
    divResul.innerHTML = "Área: " + retangulo.area();
    divResul.style.background = "#00f";
    divResul.style.color = "#fff";
    divResul.style.width = retangulo.largura + "px";
    divResul.style.height = retangulo.altura + "px";
}


$(document).ready( function(){
    $("#minhaDiv").css( "width" , "200px" );
    $("#minhaDiv").css( "height" , "300px" );
    $("#minhaDiv").css( "background-color" , "#f0f" );
    $("#minhaDiv").css( "color" , "white" );
    $("#minhaDiv").html( "<i> Oi </i>" );
    //$("#minhaDiv").text( "<i> Olá </i>" );
    $("#minhaDiv").hide( 3000 , function(){
        alert("Div escondida");
    });
} );

$("#btnAlterar").click( function(){
    // $("#minhaDiv").show( 3000 , function(){
    //     alert("Div aparecendo");
    // });
    $("#minhaDiv").toggle( 3000  );
} );