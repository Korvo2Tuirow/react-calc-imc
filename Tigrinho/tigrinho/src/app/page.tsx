"use client"
import { Modal } from "@/components/Modal";
import { NumRandomProvider } from "@/components/ContextNumRandom";
import { Button } from "@/components/button";
import { Container } from "@/components/container";
import { Verif } from "@/components/verficador";
import { Aposta } from "@/components/Aposta";

const Page = () => {      

  return (
    <div className="flex flex-col p-5 justify-center items-center h-screen w-full bgBody ">
      <h1 className="rounded-md border-4 border-[#1808ff] justify-center  text-4xl font-bold p-3 bg-gradient-to-r  from-[#1b1179]  to-[#1808ff]  absolute top-3 text-white">Jogo do Bicho</h1>

    <NumRandomProvider>
        <Container />
        <Button />
        <Verif/>
        <Modal/>
        <Aposta/>
    </NumRandomProvider>
     
    </div>


  );
}

export default Page;