import { Link } from "react-router-dom";
import { Back } from "../album/back";

export const About = () => {

   

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
            <Back/>       
        </div>
    )
}