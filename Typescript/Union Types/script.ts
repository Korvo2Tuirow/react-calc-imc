//let idade : string | number = 90;

function mostrarIdade(idade: string | number) { 
    console.log("minha idade é " + idade);
    
    if(typeof idade === 'string') {
    console.log(idade.toUpperCase());
    } else {
        console.log (idade);
    }
}

mostrarIdade(90);
mostrarIdade("90");