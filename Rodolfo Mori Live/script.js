let btn = document.querySelector("button");
let chave = "a6d29ceae26dbc378567cfced1f338fb";
let dados;

async function buscarCidade(cidade){
        dados = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?q="+cidade+'&appid='+chave)
        .then(resposta => resposta.json());    
    
        console.log(dados);
    };


function buscar(){

    let cidade = document.querySelector("input").value; 

    buscarCidade(cidade);
   

   };