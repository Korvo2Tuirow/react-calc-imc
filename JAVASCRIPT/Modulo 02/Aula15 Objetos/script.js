let personagem = {
    nome: "Robert",
    sobrenome: 'Lopes',
    altura: 1.84,
    idade: 38,
    pais: "Brasil",
    cores: ["preto", "vermelho"],
    caracteristicas: {
        forca: 20,
        magia: 0,
        stamina: 5,
    },

    carros:[
        {modelo: "fiat",
        cor:"amarelo"},
        {modelo: "Volks",
        cor: "verde"},
   ],

   nomeCompleto: function() {
    return `${this.nome} ${this.sobrenome}`;
   }
}

console.log(personagem.nome, personagem.altura);

console.log(`Poder de magia é ${personagem.caracteristicas.magia}`);

console.log(personagem.cores[1]);

personagem.caracteristicas.magia += 5;

console.log(`Poder de magia é ${personagem.caracteristicas.magia}`);

personagem.cores.push("azul");

console.log(personagem.cores);

console.log(personagem.carros[1].cor);

console.log(personagem.nomeCompleto());