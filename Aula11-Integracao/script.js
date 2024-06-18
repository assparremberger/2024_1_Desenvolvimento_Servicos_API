function add(){
    nome = document.getElementById("txtNome").value;
    if( nome.length == 0 ){
        alert("O nome deve ser preenchido");
    }else{
        ajax = new XMLHttpRequest();
        ajax.onreadystatechange = function(){
            if( this.readyState == 4 && this.status == 200){
                alert("Categoria "+nome+" cadastrada!");
                buscarCategorias();
            }else if(this.readyState == 4){
                alert( this.status +"\n"+this.responseText );
            }
        };

        ajax.open("POST", "http://localhost:8001/categoria", true);
        ajax.setRequestHeader("Content-type" , 
                            "application/x-www-form-urlencoded");
        ajax.send("nome=" + nome);
    }

}

function buscarCategorias(){
    tabela = document.getElementById("tblCategorias");

    ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function(){
        if( this.readyState == 4 && this.status == 200){
            obj = JSON.parse( this.responseText );
            obj.forEach( cat => {
                if( document.getElementById("c"+ cat.id) == null ){
                    linha = tabela.insertRow(-1);
                    linha.id = "c" + cat.id;
                    cellId = linha.insertCell( 0 );
                    cellNome = linha.insertCell( 1 );
                    cellExcluir = linha.insertCell( 2 );

                    cellId.innerHTML = cat.id;
                    cellNome.innerHTML = cat.nome;
                    cellExcluir.innerHTML =  
                        '<button onclick="excluir( '+cat.id+' )">'+
                        'Excluir</button>';
                }
            });
        }
    };
    ajax.open("GET", "http://localhost:8001/categoria", true);
    ajax.send();
}

function excluir( idCat ){
    ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function(){
        if( this.readyState == 4 && this.status == 200){
            location.reload();
        }
    }
    ajax.open("DELETE", "http://localhost:8001/categoria/"+idCat, 
            true);
    ajax.send();
}