let btn = document.querySelector("button");
let chave = "a6d29ceae26dbc378567cfced1f338fb";
let dados;


async function buscarCidade(cidade){
        dados = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?q="+cidade+'&appid='+chave + "&lang=pt_br" + "&units=metric")
        .then(resposta => resposta.json());  
        
       let city = dados.name;
       document.querySelector("#cidade").innerHTML = ` ${city}`;

       let temp = dados.main.temp;
       document.querySelector("#temp").innerHTML = `Temperatura: ${temp.toFixed(0)}°C`;

       let desc = dados.weather[0].description;
       document.querySelector("#descricao").innerHTML = `Tempo: ${desc}`;

       let umidade = dados.main.humidity;
       document.querySelector("#umidade").innerHTML = `Umidade: ${dados.main.humidity}%` 
       
       let img = dados.weather[0].icon;
       document.querySelector("#img").src ="https://openweathermap.org/img/wn/"+img+".png";

        console.log(dados);
    };


function buscar(){

    let cidade = document.querySelector("input").value; 

    buscarCidade(cidade);
   

};