"use server"

import { redirect } from "next/navigation";

export async function receberDados(prevState: any ,formData: FormData){
    const name = formData.get('name');
    const age = parseInt(formData.get('age') as string) ;
    console.log('name:', name);
    console.log('age:', age);

    if(age<18){
        return{
            msg: "Usuário é de menor"
        }
    }else{
        redirect('/tela1')
    }


  }