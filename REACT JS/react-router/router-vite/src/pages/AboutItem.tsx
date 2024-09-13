import { useParams, useNavigate } from "react-router-dom"

export const AboutItem = ()=>{

    const params = useParams();

    const navigate = useNavigate();
    const handleBack = () =>{
        navigate(-1);
    };

    return(
        <div>
            {params.slug}
            <hr />
            <button 
            onClick={handleBack}
            className="p-2 bg-green-600 text-white mt-3 rounded-md">Voltar</button>
        </div>
    )
}