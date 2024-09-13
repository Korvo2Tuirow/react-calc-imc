import { useNavigate } from "react-router-dom";

export const NotFound = () => {

    const navigate = useNavigate();
    const handleBack = () =>{
        navigate('/');
    };
    
    return (
        <div>
            <h1>PÁGINA NÃO ENCONTRADA</h1>
            <button
                onClick={handleBack}
                className="p-2 bg-green-600 text-white mt-3 rounded-md">Voltar</button>
            
        </div>
    )
}