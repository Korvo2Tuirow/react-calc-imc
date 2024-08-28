import { useReducer } from "react";
import{ v4 as uuidv4} from 'uuid';

type Person = {
    id: string;
    name: string
};

type ActionType = {
    type: string;
    payload?:{
        name?: string;
        id?: string;
    };
}

const initialState: Person[] = [];

const reducer = (state: Person[], action: ActionType)=>{

    switch(action.type){
        case 'Add':
            if(action.payload?.name){
                const newState = [...state];    
            newState.push({
                id: uuidv4(),
                name: action.payload?.name            
                });
                return newState;
            }
        break;

        case 'Del':
            if(action.payload?.id){
                let newState = [...state];
                newState = state.filter(item=> item.id !== action.payload?.id)
                return newState;
            }
        break;

        case 'Order':
            let newState = [...state];
            newState = newState.sort((a,b) =>(a.name > b.name) ? 1 : -1);
            return newState;
        break;
    }

    return state;
}

export const usePeopleList = () =>{
    return useReducer(reducer, initialState);
}

/*npm install uuid + npm install -D @types/uuid - biblioteca para gerar id*/