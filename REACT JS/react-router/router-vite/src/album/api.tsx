import axios from "axios";


const request = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/",
});

export const api ={
    
    getAlbums: async (complemento:string) => {
        const req = await request(complemento);
        return req.data;
    },

    getPhotos: async (complemento:string) => {
        const req = await request(complemento);
        return (req.data);
    }
}
