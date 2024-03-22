"use client"
import { NumContext } from "@/components/ContextNumRandom";
import { Button } from "@/components/button";
import { Container } from "@/components/container";
import { useState } from "react";


const Page = () => {

  const [numRandom, setNumRandom] = useState([0]);

  return (
    <div className="flex flex-col pb-10 justify-center items-center h-screen w-full bg-blue-100/80">

    <NumContext.Provider value={{numRandom, setNumRandom}}>
        <Container />
        <Button />
    </NumContext.Provider>
     
    </div>


  );
}

export default Page;