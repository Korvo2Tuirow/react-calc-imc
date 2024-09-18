import { useNavigate } from "react-router-dom";

export const Back = ()=>{

    const navigate = useNavigate();
    const handleBack = () =>{
        navigate(-1);
    };

    return(
        <button
        onClick={handleBack}
        className="p-2 bg-green-600 text-white mt-3 rounded-md">Voltar</button>
    )
}