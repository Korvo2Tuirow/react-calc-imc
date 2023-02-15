let obs = [
  {
    nome: "José",
    idade: 30,
    esta_trabalhando: false,
    hobbies: ["academia", "jogar"],
    status: {
      profissão: null,
      ensino: null,
    },
  },

  {
    nome: "Robert",
    idade: 38,
    esta_trabalhando: false,
    hobbies: ["programar", "jogar", "dormir"],
    status: {
      profissão: "desempregado",
      ensino: "médio",
    },
  },
];
/*
console.log(obs);

const jsonData = JSON.stringify(obs);

console.log(jsonData);

const objData = JSON.parse(jsonData);

console.log(objData);

objData.map((pessoa) => {
  console.log(pessoa.nome);
});*/

async function getjson(){
    let obj = await fetch('/teste.json');
    objson = await obj.json();

    console.log(objson);

}

getjson();