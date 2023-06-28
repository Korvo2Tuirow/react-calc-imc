type Idade = string | number;

let idade: Idade = 90;
function mostarIdade(i: Idade):Idade{
    return i;
}

mostarIdade(90);

///////////////////////////////////////////

/*type User = {
    nome: string,
    ano:number;
}*/

interface User{
    nome:string;
    ano:number;
}

function resumo (usuario: User){
    return `Olá ${usuario.nome} você nasceu em ${usuario.ano}`;
}

resumo({
    nome: 'Korvo',
    ano: 1984
});