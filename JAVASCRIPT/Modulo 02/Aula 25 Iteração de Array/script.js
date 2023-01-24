let frutas = ["Banana", "Maça", "Pera", "Laranja","Uva"] ;

let bigFrutas = frutas.filter((item) => item.length <= 4);

console.log(bigFrutas)

//////////////////////////////////////////////////////////////

let maior = frutas.every((letras) => letras.length > 3);

if(maior){
    console.log("Todas as frutas tem mais de 3 letras"); 
}else{
    console.log("Não são todos Maior  que 3 letras");
};

///////////////////////////////////////////////////////////

let frutas1 = frutas.some((letras1) => letras1.length > 3 );

if(frutas1){
    console.log("Algumas frutas tem mais que 3 letras")
}else{
    console.log("Algumas frutas possuem menos q 3 letras")
};

///////////////////////////////////////////////////////////

console.log(frutas);

frutas.pop();

if(frutas.includes("Uva")){
    console.log("Tem uva sim")
}else{
    console.log("Não tem uva")
}













     





  

