import { useParams } from "react-router-dom"
import { Back } from "./back";
import { api } from "./api";
import { useCallback, useEffect, useState } from "react";
import { Albums, Props } from "./types";


export const Album = () => {
    const { id } = useParams();
    const [data, setData] = useState<Props[]>([])
    const [title, setTitle] = useState<Albums>()

    const getPhotos = useCallback(async () => {
        if (id) {
            const res = await api.getPhotos(`albums/${id}/photos`);
            setData(res);            
        }
    }, [id]) 
    
    const getAbuns = useCallback(async () => {
        if (id) {
            const res = await api.getAlbums(`albums/${id}`);
            setTitle(res);            
        }
    }, [id])  

    useEffect(() => {  
        getAbuns();     
        getPhotos();
    }, [getPhotos, getAbuns]);

    return (
        <div>
            <p className="font-bold text-2xl flex justify-center">{title?.title.toLocaleUpperCase()}</p>
            <Back />
            <div className="flex justify-center ">
                <div className="flex flex-1 flex-wrap gap-2 p-3 max-w-screen-lg justify-center">
                    {data.map((photo) => (
                        <img key={photo.id} src={photo.thumbnailUrl} alt={photo.title} />
                    ))}
                </div>
            </div>
        </div>
    )
}