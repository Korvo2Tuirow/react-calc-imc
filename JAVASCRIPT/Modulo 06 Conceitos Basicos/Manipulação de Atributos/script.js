function trocarImagem(filename, nome){
    document.querySelector('.imagem').setAttribute('src', 'imagens/'+filename);

    document.querySelector('.imagem').setAttribute('data-name', nome);

}

function pegarNome(){
    let foto = document.querySelector('.imagem').getAttribute('data-name');
    
    alert('A foto é do '+foto);
}

//////////////////////////////////////////////////////////////////