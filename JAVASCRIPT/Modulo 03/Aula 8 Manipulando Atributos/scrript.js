function clicou(){
    let input = document.querySelector('input');

    console.log(input.getAttribute('placeholder'));

    if(input.hasAttribute('type')){
        console.log("tem sim esse atributo")
    } else {
        console.log("Não tem esse atributo")
    }

    input.setAttribute('type', 'text');

}


function clicou02() {
const senha = document.querySelector('.input02');
const btn = document.querySelector('.botao02');



if(senha.getAttribute('type') === 'text'){
    senha.setAttribute('type', 'password');
    btn.innerText = 'Mostrar senha';
    btn.style.backgroundColor = 'buttonface';
    btn.style.color = 'buttontext';

   
}else{
    senha.setAttribute('type', 'text');
    btn.innerText = 'Ocultar senha';
    btn.style.backgroundColor = '#333'
    btn.style.color = '#fff'
}





}