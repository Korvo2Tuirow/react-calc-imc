function resumo(usuario: {nome: string, idade?: number}){

    if(usuario.idade !== undefined){
        return `Olá ${usuario.nome} você tem ${usuario.idade} anos`;
    }else{

        return ` Olá ${usuario.nome}`;

    }
}

let u = {
    nome: 'Korvo',
    idade: 38
};

resumo(u);