let dia = 3;
let diaNome = " ";

switch (dia) {
  case 1:
    diaNome = "Segunda";
    break;

  case 2:
    diaNome = "Terça";
    break;
  case 3:
    diaNome = "Quarta";
    break;

    case 4:
    diaNome = "Quinta";
    break;

    case 5:
    diaNome = "Sexta";
    break;

  default:
    diaNome = "Fim de Semana";
    break;
}

document.querySelector(".dia").innerHTML = `Hoje é ${diaNome}`;
