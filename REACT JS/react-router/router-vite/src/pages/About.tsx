import { Link, useNavigate } from "react-router-dom";

export const About = () => {

    const navigate = useNavigate();
    const handleBack = () =>{
        navigate(-1);
    };

    return (
        <div>
            <h1>ROTA ABOUT</h1>
            <hr />
            <ul>
                <li className="p-2 bg-blue-600 text-white mt-3 rounded-md w-fit"><Link to="/sobre/korvo">Korvo</Link></li>
                <li className="p-2 bg-blue-600 text-white mt-3 rounded-md  w-fit"><Link to="/sobre/bonieky">Bonieky</Link></li>
            </ul> 
            <hr />
            <hr />
            <button 
              onClick={handleBack}
            className="p-2 bg-green-600 text-white mt-3 rounded-md">Voltar</button>          
        </div>
    )
}