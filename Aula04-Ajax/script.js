function ler(){
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        divInfo = document.getElementById("divInfo");
        divInfo.innerHTML = "Carregando...";
        if( this.readyState == 4 && this.status == 200){
            divInfo.innerHTML = this.responseText;
        }
        if( this.readyState == 4 && this.status == 404){
            divInfo.innerHTML = this.status+" - "+this.statusText;
        }
    };

    xhttp.open("GET" , "info2.txt" , true);
    xhttp.send();

}

function gerarNumeros(){
    valor = document.getElementById("txtValor").value;
    divNumeros = document.getElementById("divNumeros");
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        divNumeros.innerHTML = "Carregando...";
        if( this.readyState == 4 && this.status == 200){
            divNumeros.innerHTML = this.responseText;
        }
    };
    xhttp.open("GET" , "servidor.php?numero=" + valor , true);
    xhttp.send();
}