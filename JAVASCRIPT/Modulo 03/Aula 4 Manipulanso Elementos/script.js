function clicou(){
    const teste =document.querySelector('#teste');
   console.log(teste.children[0].children);
   const ul = teste.querySelector('ul');
   console.log(ul);
}


function clicou2(){
     const teste2 = document.querySelector('#teste2');
   const ul2 = teste2.querySelector('ul');
   ul2.innerHTML = "<li> Item alterado</li>";
}


function clicou3(){
  const teste3 = document.querySelector('#teste3');
  const ul3 = teste3.querySelector('ul');
  ul3.innerHTML += ul3.innerHTML 
  ul3.children[0].innerText =  "<li><strong>Item alterado2</strong></li>";
  
}

function clicou4(){
  const teste4 = document.querySelector('#teste4');
  const ul4 = teste4.querySelector('ul');
  ul4.children[0].append(" ola") // concatena
  ul4.append("ola")
}


function clicou5() {
  
  const teste5 = document.querySelector('#teste5');
  const ul5 = teste5.querySelector('ul');
  let newLi = document.createElement("li");
  newLi.innerText = "item novo";
  ul5.appendChild(newLi);

  let newText = document.createElement("h1");
  newText.innerText = "Texto novo";
  ul5.prepend(newText);
}

function clicou6(){
const add = document.querySelector("body")  
const btn = document.createElement("button")
btn.innerText = "Novo Botão";
add.append (btn) ;
}


function clicou7(){
  const newUl = document.createElement("ul");
  const add = document.querySelector("body") 

  for(let i = 1; i <5; i++){
   let newLi2 = document.createElement("li");
   newLi2.innerHTML = "item adicionado" + ' ' +i;
   newUl.append(newLi2);
  }
  
  add.append(newUl);
}
  
 

//after = depois
   //before = antes
/////////////////////////////////////////////  

  



let teste8 = document.querySelector("#teste8");


 function cname(){
   let primeiro = prompt("Digite seu nome");
 
  teste8.innerText = `Bem vindo ${primeiro}`;
 
  }



  /////////////////////////////////////
 let spn = document.querySelector('.spn');
  
function clk(){

  let segundo = document.querySelector('#number'); 

  let valor = segundo.valueAsNumber;

  console.log (typeof valor);

  for(v1=valor; v1<20; v1 += 2 ){
    
    console.log (v1);

   let lele = document.createElement('span');
   spn.append(lele);

   lele.innerHTML = `<br>${v1}`;
   
   }


}











