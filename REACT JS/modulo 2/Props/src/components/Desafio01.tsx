import {useState} from "react";
import { photoList } from "@/photoList";

export const Desafio01 = () =>{


    return (
        <div className="mx-auto">
            <h1 className="text-3xl text-center">Imagens</h1>
            <section className="container max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    photoList.map((item) =>(
                        <div>...</div>
                ))}
            </section>
        
        </div>
)
}