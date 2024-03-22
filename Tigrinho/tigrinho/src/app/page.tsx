"use client"
import { NumRandomProvider } from "@/components/ContextNumRandom";
import { Button } from "@/components/button";
import { Container } from "@/components/container";

const Page = () => { 

  return (
    <div className="flex flex-col pb-10 justify-center items-center h-screen w-full bg-blue-100/80">

    <NumRandomProvider>
        <Container />
        <Button />
    </NumRandomProvider>
     
    </div>


  );
}

export default Page;