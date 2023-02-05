class Person{

    age = 0;

    constructor(name) {
        this.name =name;
    }

    sayHi(){
        console.log(`${p1.name} diz Ola`);
    }

};


class Studant extends Person{

    id = 1;

    constructor(name, id ){
        super(name);       
        this.id = id;
    }

   // sayHi(){
     //   console.log(`${p1.name} extands muda o pai`);
   // }
    // ou

    sayHello(){
        super.sayHi();
    }


};

let p1= new Studant('Korvo', 31);
p1.age = 38;

console.log(`${p1.name} tem ${p1.age} e sua matricula é ${p1.id}`);

p1.sayHi();
p1.sayHello;