function firstLetterUppercase(name: string){
    let firstLetter = name.charAt(0).toUpperCase();
    return firstLetter+name.substring(1);

}

firstLetterUppercase('robert');

///////////////////////////////////////////////////////

function somar (n1: number, n2: number):number {

return n1 + n2;

}

let num  = somar(10, 50);

/////////////////////////////////////////////////////////

let names = ['korvo', 'robert', 'lopes', 90];

names.forEach(function (nome){

    if(typeof nome === 'string'){
    console.log(nome.toUpperCase());
    }else{
        console.log (nome);
    }
});

/////////////////////////////////////////////////////////


