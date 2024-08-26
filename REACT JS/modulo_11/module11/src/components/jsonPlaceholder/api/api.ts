import axios from "axios"

const BASE = "https://jsonplaceholder.typicode.com";
export const api = {

    getAllPosts: async () =>{
        let req = await axios.get(`${BASE}/posts`);
        return req.data;

        /*const req = await fetch("https://jsonplaceholder.typicode.com/posts");
        const resp = await req.json();*/
    },

    addNewPost: async (title: string, body: string, userId: number) =>{
        let response  = await axios.post(`${BASE}/posts/`,{
            title, body, userId
        });
            response.status == 201 ? alert("Post successfully added") : alert("Post error");

        return response.data;
        
        /*    let response = await fetch("https://jsonplaceholder.typicode.com/posts",
                {
                    method: "POST",
                    body: JSON.stringify({
                        title: addTitle,
                        body: addBodyText,
                        userId: 1
                    }),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            )
            let json = await response.json();
            console.log(json);*/
    }
}