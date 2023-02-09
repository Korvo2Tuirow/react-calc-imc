let btn = document.querySelector("#btn");
let url = "https://jsonplaceholder.typicode.com/todos";

/*
btn.addEventListener("click", ()=>{
  alert("clicou");
}
);
*/

btn.addEventListener("click", clickCallback);

function clickCallback() {
  fetch(url)
    .then((response) => response.json())
    .then((json) => console.log(json));
}

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
    });
});
///////////////////////////////////////////////////
//https://www.youtube.com/watch?v=1d5jNmKdwlY

document.querySelector("#btn4").addEventListener("click", () => {
  (async function () {
    let res = await fetch(url);
    let resData = await res.json();
    console.log(resData[160]);
  })()
  .catch((erro)=>{
    alert("ERRO NA REQUISIÇÃO");
    console.log(erro);
  })
});
