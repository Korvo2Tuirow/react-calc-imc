let btn = document.querySelector("#btn");
/*
btn.addEventListener("click", ()=>{
  alert("clicou");
}
);
*/

btn.addEventListener("click", clickCallback);

function clickCallback(){
 fetch("https://jsonplaceholder.typicode.com/todos")
 .then(response => response.json())
 .then(json => console.log(json))

 
  
};
document.querySelector("#btn2").addEventListener('click', click);
function click(){
  fetch("https://dummyjson.com/products")
  .then((resposta)=>{
    return resposta.json(); // converte a resposta em um objeto
   })

   .then((dados) =>{
    console.log(dados);
      console.log(dados.products[10]);
   })
  

}
