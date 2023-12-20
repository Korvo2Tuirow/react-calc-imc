import {useState} from "react";
import { photoList } from "@/photoList";

export const Desafio01 = () =>{
    const modal =()=>{
        alert("OLA")
    }

    return (
        <div className="mx-auto mb-20">
            <h1 className="text-3xl text-center my-10">Imagens</h1>
            <section className="container max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    photoList.map((item) =>(
                        <div className="hover:opacity-80 cursor-pointer" onClick={modal}><img src={`/assets/${item.url}`} alt=""  className="w-full" /></div>
                ))}
            </section>
        
        </div>
)
}