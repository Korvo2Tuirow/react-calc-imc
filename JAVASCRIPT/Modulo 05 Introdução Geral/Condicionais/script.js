let hora = 15;

if(hora <= 12){
    console.log("Bom Dia");
}
else if(hora < 18){
    console.log("Boa Tarde");
}
else if(hora < 24){
    console.log("Boa noite");
}

///////////////////////////////////////////////

if(hora >=12 && hora < 18){
    console.log("Boa Tarde");// exibe somente se satisfaz a condição / && = conjunção ("e" lógico)
}

// || = ou
// ! = negação
// && = e