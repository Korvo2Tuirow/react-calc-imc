import { ItemReducer } from "@/types/itemReducer";

type AddAction = {
    type: 'add';
    payload: {text:string;}
}

type EditNewAction = {
    type: "editText";
    payload: {
        id:number;
        newText: string;
    }
}

type ToggleDoneAction = {
    type: 'toggleDone';
    payload: {id: number;}
}

type DeleteAction = {
    type: 'remove';
    payload : {id:number;}
}

type  ListAction = AddAction | EditNewAction | DeleteAction | ToggleDoneAction; 

export const ListReducer = (list: ItemReducer[], action: ListAction) => {

    switch(action.type){
        case 'add':
            return [...list,{
                id : list.length,
                text: action.payload.text,
                done: false
            }];

        case 'editText':
            return list.map(t => {
                if(t.id === action.payload.id) {
                    t.text = action.payload.newText;
            }
            return t;
        });

        case 'toggleDone':
            return list.map(t => {
                if(t.id == action.payload.id)t.done = !t.done;    
                
                return t;
        });

        case 'remove':
            return list.filter(t=> t.id !== action.payload.id);

        default:
                return list;   
    }
    
    

    
}