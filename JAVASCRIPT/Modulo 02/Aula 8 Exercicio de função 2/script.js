

// function calcularImovel(metragem, quartos) {
//   let m2 = 3000;//valor do metro quadrado
//   let preco = 0;
// switch (quartos) {
//   case 1:
//   default:
//     preco = metragem * m2;
//     break;

//   case 2:
//     preco = metragem * (m2 * 1.2);
//     break;

//   case 3:
//     preco = metragem * (m2 * 1.5);
//     break;

// }
// return preco;

// }

// let metragem = 123; // tamanho da casa
// let quartos = 1; //quantidades de quartos
// let preco = calcularImovel(metragem, quartos);
// console.log(`A casa custa R$ ${preco}`);



/*Validar Login
Usuário: Pedro
Senha: 1234
*/


function login(usuario, senha) {
  if (usuario === "Pedro"  && senha === 1234){
        return true;
  }else{
        return false;
    }
}

let usuario = "Pedro";
let senha = 1234;
let validacao = login(usuario, senha);

if(validacao) {
  console.log("Acesso Permitido")
}else{
  console.log("Acesso Negado")
}

function teste(num1){
  switch(num1){
    case 1:
      console.log("Seu numero foi o um");
      break;

      case 2:
      console.log("Seu numero foi o dois");
      break;

      case 3:
      console.log("Seu numero foi o tres");
      break;
  }

  
}



teste(3);

console.log(num1)