let input = document.querySelector('input');

let lista = document.querySelector('ul');

input.addEventListener('keyup', adicionar);

function adicionar(event){
    if(event.key === 'Enter'){

        let valor = input.value;

        let newLi = document.createElement('li');

        newLi.innerHTML = valor;

        lista.appendChild(newLi);

        input.value = "";
        
    }
}

