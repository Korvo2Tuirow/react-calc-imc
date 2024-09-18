import { Link } from "react-router-dom"

export const Home = ()=>{
    return(
        <div>ROTA HOME
            <hr />
            <button className="p-2 bg-red-600 text-white my-3 rounded-md"><Link to="/sobre">SOBRE</Link></button>
            <hr />
            <button className="p-2 bg-green-600 text-white my-3 rounded-md"><Link to="/album">Album</Link></button>
        </div>
    )
}