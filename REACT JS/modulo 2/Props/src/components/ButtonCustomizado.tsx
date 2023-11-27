type Props = {
    label: string;
    onClick: () => void;
}



export const ButtonCustomizado = ({label, onClick}:Props) =>{


    return(

        

        <button onClick={ onClick } className=" p-3 text-white bg-green-800 mr-5">{label}</button>



    )



}