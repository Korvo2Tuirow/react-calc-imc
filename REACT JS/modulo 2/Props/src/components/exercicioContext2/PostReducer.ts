import {Post} from './ContextsPosts';

type AddAction = {
    type: 'add';
    payload: {
        titulo:string;
        texto:string;
    }
}

type RemoveAction={
    type: 'remove';
    payload:{
        id:number;
    }
}


export type PostActions = AddAction | RemoveAction;

export const PostReducer = (posts:Post[], action:PostActions):Post[]=>{
    
    switch(action.type){
        case "add":
        return [...posts,  {id:posts.length, titulo:action.payload.titulo, texto:action.payload.texto}];

        case "remove":
        return posts.filter(p=>p.id !== action.payload.id);
        
        default:
        return posts;

    
    }
}