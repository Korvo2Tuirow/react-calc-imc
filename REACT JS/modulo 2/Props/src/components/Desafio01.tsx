import { useState } from "react";
import { photoList } from "@/data/photoList";
import { PhotoItem } from "@/components/PhotoItem";
import { Modal } from "@/components/Modal";

export const Desafio01 = () => {
    
    const[showModal, setShowModal] = useState(false);
    const[imageOfModal, setImageOfModal] = useState('');

    const openModal = (id:number) =>{
        const photo = photoList.find(item=> item.id === id);
        if(photo){
            setImageOfModal(photo.url);
            setShowModal(true);
        }    
    }

    const closeModal = () =>{
        setShowModal(false);
    }

   

    return (
        <div className="mx-auto  py-10 bg-sky-950" >
            <h1 className="text-3xl text-center mb-10">Imagens</h1>

            <section className="container max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    photoList.map((item) => (
                        <PhotoItem
                            key={item.id}
                            photo={item}
                            onClick={() => openModal(item.id)}
                        />
                    ))}
            </section>

            {showModal &&
                <Modal image={imageOfModal} closeModal={closeModal} />
            }

        </div>
    )
}