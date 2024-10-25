
import {reducerActionType} from "../types/reducerActionType"

export type userType = {
    name: string;
    age: number|any
};

export const userInitialState: userType = {
    name: "",
    age: ""
};

export const userReducer = (state: userType, action: reducerActionType )=>{

    switch(action.type){
        case'CHANGE_NAME':
            return{...state, name: action.payload.name};
        // eslint-disable-next-line no-unreachable
        break;

        case'CHANGE_AGE':
            return{...state, age: action.payload.age};
        // eslint-disable-next-line no-unreachable
        break;

    }


    return state;
}