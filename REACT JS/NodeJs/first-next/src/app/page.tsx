// pages/index.js

import { Metadata } from "next"
import Link from "next/link"
import { receberDados } from "./actions/receber-dados"
import { Form } from "@/components/form"
import { Upload } from "./upload/page"

export const metadata: Metadata = {
  title: "Home",
  
}

export default function Home() {



  return (
    <div className="p-5 flex flex-col justify-center gap-4 border bg-slate-600 m-5">
      <h1>HOME</h1>
      <div className=" flex flex-col gap-3 shadow-custom bg-slate-700 border  shadow-black p-5">
        <a href="./sobre" className="border p-3 bg-blue-900 max-w-fit rounded-md shadow-black shadow-md hover:scale-105">Sobre</a>
        <a href="./signin" className="border p-3 bg-blue-900 max-w-fit rounded-md shadow-black shadow-md hover:scale-105">SignIn</a>
        <a href="./signup" className="border p-3 bg-blue-900 max-w-fit rounded-md shadow-black shadow-md hover:scale-105">SignUp</a>
        <a href="./blog" className="border p-3 bg-blue-900 max-w-fit rounded-md shadow-black shadow-md hover:scale-105">Blog</a>
      </div>

      <div className=" flex flex-col gap-3 shadow-custom bg-slate-700 border  shadow-black p-5">
         <Link href={'/tela1'} className="border p-3 bg-green-700 max-w-fit rounded-md shadow-black shadow-md hover:scale-105">Ir para Tela 1</Link>
      </div>

     
         <Form/>
         <Upload/>
     

    



    </div>
  )
}