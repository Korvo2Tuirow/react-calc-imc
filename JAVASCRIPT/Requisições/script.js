let btn = document.querySelector("#btn");
let url = "https://jsonplaceholder.typicode.com/todos";

/*
btn.addEventListener("click", ()=>{
  alert("clicou");
}
);

GET = PEGAR
POST = ENVIAR
PUT = MODIFICAR
DELETE = DELETAR
*/

btn.addEventListener("click", clickCallback);

async function clickCallback() {
  fetch(url)
    .then((response) => response.json())
    .then((json) => console.log(json))
    .finally(()=>{
      console.log("REQUISIÇÃO FINALIZADA");
    })
    };


    document.querySelector("#btn5").addEventListener("click", inserir);

  async function inserir(){ 
  let enviar = await fetch(url,
    { 
      method: 'POST',
      headers:{
        'Content-Type':  'application/json'
      },
      body:JSON.stringify({
        title: "Titulo de teste",
        body: "Corpo de teste",
        userID: "KORVO TUIROW"
      })
    }
  )

let objPost = await enviar.json();

console.log(objPost);
  
}


////////////////////////////////////////////////////////////////////
document.querySelector("#btn2").addEventListener("click", click);
function click() {
  fetch("https://dummyjson.com/products")
    .then((resposta) => {
      return resposta.json(); // converte a resposta em um objeto
    })

    .then((dados) => {
      console.log(dados);
      console.log(dados.products[10]);
    })

    .catch(() =>{
      console.log ("DEU ERRO")
    })

       .finally(()=>{
      console.log("REQUISIÇÃO FINALIZADA");
    })
    
}

///////////////////////////////////////////////////////////
//ORIGAMI https://www.youtube.com/watch?v=fhIDgAfuJZ8

document.querySelector("#btn3").addEventListener("click", () => {
  fetch("https://ranekapi.origamid.dev/json/api/produto")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .finally(()=>{
      console.log("REQUISIÇÃO FINALIZADA");
    })
});
///////////////////////////////////////////////////
//https://www.youtube.com/watch?v=1d5jNmKdwlY

document.querySelector("#btn4").addEventListener("click", async () => {

    let res = await fetch(url);
    let resData = await res.json();
    console.log(resData[160]);
 
});

/*/////////////////////////
          ERROS

1 - Respostas de informação
2 - Respostas de sucesso
3 - Redirecionamento
4 - Erros do cliente
5 - Erros do servidsor
/////////////////////////*/