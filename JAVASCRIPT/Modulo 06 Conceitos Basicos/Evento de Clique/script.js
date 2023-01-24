function clicou(){
document.getElementById("title").innerHTML = "Obrigado";
}

let windows = window;

windows.addEventListener('keypress', click);

function click(event){
    if(event.key === "w"){
        alert("Apertou a Tecla W");
    }
}



