import { ReactNode } from "react";


type Props = {
    children: ReactNode;
};

export const Card = ({children}: Props) =>{
    return (
        <div className="border-2 border-red-700 p-3">
            {children} 
    
        </div>
    )
}