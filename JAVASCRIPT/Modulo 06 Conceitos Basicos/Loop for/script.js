let texto = " ";

for(let i = 0; i <=30; i++){
    texto = texto + i + '<br/>';
};

document.getElementById("demo").innerHTML = texto;




let carros = ['Ferrari', 'Fusca', 'Palio', 'Corolla'];

let html = '<ul>';

for(let c in carros){
    html += '<li>'+carros[c] +'</li>';
}

html += '</ul>';

document.getElementById("demo2").innerHTML = html;