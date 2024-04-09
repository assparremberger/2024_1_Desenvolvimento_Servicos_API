function lerDados(){
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if( this.readyState == 4 && this.status == 200){
            dados = this.responseXML;

            pessoa = dados.getElementsByTagName("pessoa");
            nome = pessoa[0].getElementsByTagName("nome");
            nomePessoa = nome[0].childNodes[0].nodeValue;

            idade = pessoa[0].getElementsByTagName("idade");
            idadePessoa = idade[0].childNodes[0].nodeValue;

            texto = "<b>Nome: </b>" + nomePessoa +"<br>";
            texto += "<b>Idade: </b>" + idadePessoa +"<br>";
           
            document.getElementById("divDados").innerHTML = texto;
        }
    };
    xhttp.open("GET" , "dados.xml" , true);
    xhttp.send()
}

function lerProdutos(){
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if( this.readyState == 4 && this.status == 200){

            console.log( this.responseXML );
            
            dados =  this.responseXML;

            // if( dados.getElementsByTagName("resposta") ){
            //     erro = dados.getElementsByTagName("resposta");
            //     alert( erro );
            // }else{
                tabela = "<table border='1'> ";
                tabela += "     <tr> ";
                tabela += "         <th>Código</th> ";
                tabela += "         <th>Nome</th> ";
                tabela += "         <th>Preço</th> ";
                tabela += "         <th>Quantidade</th> ";
                tabela += "         <th>CodCategoria</th> ";
                tabela += "         <th>Excluir</th> ";
                tabela += "     </tr> ";
                produtos = dados.getElementsByTagName("produto");

                //produtos.forEach( prod => {
                for( i=0; i < produtos.length; i++){
                    tabela += "<tr>";

                    id = produtos[i].getElementsByTagName("id")[0].childNodes[0].nodeValue;
                    tabela += "     <td>"+id+"</td>";

                    nome = produtos[i].getElementsByTagName("nome")[0].childNodes[0].nodeValue;
                    tabela += "     <td>"+nome+"</td>";

                    preco = produtos[i].getElementsByTagName("preco")[0].childNodes[0].nodeValue;
                    tabela += "     <td>"+preco+"</td>";

                    qtd = produtos[i].getElementsByTagName("qtd")[0].childNodes[0].nodeValue;
                    tabela += "     <td>"+qtd+"</td>";
                    
                    cat = produtos[i].getElementsByTagName("categoria")[0].childNodes[0].nodeValue;
                    tabela += "     <td>"+cat+"</td>";

                    tabela += "     <td><button onclick='excluir("+
                                        id+ ")' >Excluir</button></td>";
                    tabela += "</tr>";
                } ;
                tabela += "</table>";
                document.getElementById("divProdutos").innerHTML = tabela;
          // }
        }
    };
    xhttp.open("GET" , "servidor.php?buscar" , true);
    xhttp.send()
}


function excluir( id ){
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if( this.readyState == 4 && this.status == 200){
            dados = JSON.parse( this.responseText );
            if( dados.resposta ){
                alert( dados.resposta );
                lerProdutos();
            }
        }
    };
    xhttp.open("GET" , "servidor.php?excluir&id="+id , true);
    xhttp.send();
}

function inserir( ){
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if( this.readyState == 4 && this.status == 200){
            console.log( this.responseText );
            dados = JSON.parse( this.responseText );
            if( dados.resposta ){
                alert( dados.resposta );
                lerProdutos();
            }
        }
    };
    nome = document.getElementById("txtNome").value;
    preco = document.getElementById("txtPreco").value;
    qtd = document.getElementById("txtQtd").value;
    xhttp.open("POST" , "servidor.php?inserir" , true);
    xhttp.setRequestHeader("Content-type" ,
                "application/x-www-form-urlencoded");
    xhttp.send( "nome="+nome+"&preco="+preco+"&qtd="+qtd);
}