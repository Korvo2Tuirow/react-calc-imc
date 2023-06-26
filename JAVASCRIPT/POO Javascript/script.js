/*  PROCEDURAL ----------------------------------------------------------------
let ingredientes = ['água', 'mel', 'sal', 'mostarda'];
let modificado = [];


for(var i = 0; i < ingredientes.length; i++){
   let letraInicial = (ingredientes[i]).charAt(0).toUpperCase();
   
   let restoTexto = ingredientes[i].slice(1);

   let resultado = letraInicial+restoTexto;

   modificado[i] = resultado;  

}

let ordenado = modificado.sort(function(a,b){
    return a.localeCompare(b);
});

console.log(ordenado);

===DEIXOU AS PRIMEIRAS LETRAS MAIUSCULAS E EM ORDEM ALFABETICA EM PT-BR==

*/

let ingredientes = ['água', 'mel', 'sal', 'mostarda'];


function capitalizar(ingredientes){

    let modificado = [];

    for(var i = 0; i < ingredientes.length; i++){
        let letraInicial = (ingredientes[i]).charAt(0).toUpperCase();
        
        let restoTexto = ingredientes[i].slice(1);
     
        let resultado = letraInicial+restoTexto;
     
        modificado[i] = resultado; 

    };
    return modificado;
}

console.log(capitalizar(ingredientes));

function ordenar(ingredientes){
    return ingredientes.sort(function(a,b){
    return a.localeCompare(b);
    });  
}

let resultadoCapitalizado = capitalizar(ingredientes);
let resultadoOrdenado = ordenar(resultadoCapitalizado);

console.log(resultadoCapitalizado);