import axios from "axios";


const request = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/",
});

export const api ={
    
    getAlbum: async (complemento:string) => {
        const req = await request(complemento);
        return req.data;
    },

    getPhotos: async () => {
        const req = await request("photos");
        return req.data;
    }
}
