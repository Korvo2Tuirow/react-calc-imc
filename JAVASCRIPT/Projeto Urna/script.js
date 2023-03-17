let qs = (el) => document.querySelector(el);

let cargo = qs(".d-1-2 span");
let seuVotoPara = qs(".d-1-1 span");
let descricao = qs(".d-1-4");
let aviso = qs(".d-2");
let lateral = qs(".d-1-direita");
let numeros = qs(".d-1-3");
let informacoes = qs('.d-1-esquerda');

let etapaAtual = 0;
let numero = "";
let votoBranco = false;
let votos = [];

function comecarEtapa() {
  let etapa = etapas[etapaAtual];

  let numeroHTML = "";
  numero = "";
  votoBranco = false;

  for (let i = 0; i < etapa.numeros; i++) {
    if (i === 0) {
      numeroHTML += '<div class="numero pisca"></div>';
    } else {
      numeroHTML += '<div class="numero"></div>';
    }
  }

  seuVotoPara.style.display = "none";
  lateral.style.display = "none";
  cargo.innerHTML = etapa.titulo;
  descricao.innerHTML = "";
  aviso.style.display = "none";
  lateral.innerHTML = "";
  numeros.innerHTML = numeroHTML;
}

function atualizaInterface() {
  let etapa = etapas[etapaAtual];

  let candidato = etapa.candidatos.filter((item) => {
    if (item.numero == numero) {
      return true;
    } else {
      return false;
    }
  });

  if (candidato.length > 0) {
    candidato = candidato[0];
    seuVotoPara.style.display = "block";
    aviso.style.display = "block";
    lateral.style.display = "block";
    descricao.innerHTML = `Nome: ${candidato.nome}</br>Partido: ${candidato.partido}`;

    let fotosHTML = "";
    for (let i in candidato.fotos) {
      if (candidato.fotos[i].small) {
        fotosHTML += `<div class="d-1-imagem small">
        <img src="images/${candidato.fotos[i].url}" alt="">${candidato.fotos[i].legenda}</div>`;
      } else {
        fotosHTML += `<div class="d-1-imagem">
        <img src="images/${candidato.fotos[i].url}" alt="">${candidato.fotos[i].legenda}</div>`;
      }
    }
    lateral.innerHTML = fotosHTML;
  } else {
    seuVotoPara.style.display = "block";
    aviso.style.display = "block";
    descricao.innerHTML = '<div class="aviso--grande pisca">VOTO NULO</div>';
  }
  console.log(candidato);
}

function clicou(n) {
  let elNumero = qs(".numero.pisca");

  if (elNumero !== null) {
    elNumero.innerHTML = n;
    numero = `${numero}${n}`;
    elNumero.classList.remove("pisca");

    if (elNumero.nextElementSibling !== null) {
      elNumero.nextElementSibling.classList.add("pisca");
    } else {
      atualizaInterface();
    }
  }
}

function branco() {
  numero = "";
  votoBranco = true;
  seuVotoPara.style.display = "block";
  aviso.style.display = "block";
  numeros.innerHTML = "";
  descricao.innerHTML = '<div class="aviso--grande pisca">VOTO EM BRANCO</div>';
  lateral.style.display = "none";
}

function corrige() {
  comecarEtapa();
  
}

function confirma() {
  let etapa = etapas[etapaAtual];

  let votoConfirmado = false;

  if (votoBranco === true) {
    votoConfirmado = true;
    votos.push({
        etapa: etapas[etapaAtual].titulo,
        voto: 'Branco'
    });
    
  } else if (numero.length === etapa.numeros) {
    
    votoConfirmado = true;
    votos.push({
        etapa: etapas[etapaAtual].titulo,
        voto: numero
    });
  }

  if (votoConfirmado) {
    etapaAtual++;
    if (etapas[etapaAtual] !== undefined) {
      comecarEtapa();
    } else {
      qs(".tela").innerHTML = '<div class="aviso--grande pisca fim">FIM</div>';

      console.log(votos);
      
      lateral.style.display = "none";     
      aviso.style.display = "none";      
      informacoes.style.display = "none";
    }
  }
}

comecarEtapa();
