
//AULA MUITO CONFUSA

class Input{
    _type = "text";
    required = false;

constructor(name, label){
    this.name = name;
    this.label = label;
}

get type(){
    return this._type;
}

set type(t){
    if(["text", "password", "email", "submit"].includes(t)){
        this._type = t;
    }else{
        throw new Error(`Input "${t}" type doesn't exist`)
    }
}
}

//Email

let email = new Input("email", "Digite seu email");
email.type = "email";
email.required = true;

//senha

let password = new Input("password", "Digite sua senha");
password.type = "password";
password.required = true;