let display1 = document.querySelector('#number1');
let display2 = document.querySelector('#number2');
let clear = document.querySelector('#clear');
let nome = document.querySelector("#name");
let foto = document.querySelector("#image");
let confirma = document.querySelector('#confirm');
let urna = document.querySelector('#urna');
let final = document.querySelector('#fim');
let voltar = document.querySelector('#back');
let container = document.querySelector('container');

function inserir(valor) {
  if (display1.innerHTML == "") {
    num1 = valor;
    display1.innerHTML = num1;
   
  } else if (display2.innerHTML == "") {
    num2 = valor;
    display2.innerHTML = num2;

    concatenarNumeros();
  }
}
clear.addEventListener('click', limpar);

function limpar() {
  display1.innerHTML = "";
  display2.innerHTML = "";
  nome.innerHTML = "";
  foto.innerHTML = "";
}

function concatenarNumeros() {
  concatena1 = display1.innerHTML;
  concatena2 = display2.innerHTML;
  numeroCandidato = concatena1 + concatena2;
  numeroCandidato = parseInt(numeroCandidato);

  mostrarDados()
}

function mostrarDados(){
  dados = candidatos.filter(candidatoEscolhido => candidatoEscolhido.numero === numeroCandidato);
  nome.innerHTML = dados[0].nome;
  foto.innerHTML = dados[0].imagem;
};

confirma.addEventListener('click', confirmar);

function confirmar(){
 if(foto.innerHTML != ""){
final.style.display = 'flex';
final.classList.add('anima');
container.style.display = 'none';
}
};


voltar.addEventListener('click', back);

function back(){
  //container.style.display = 'block';
  final.style.display = 'none';
  limpar();
};

