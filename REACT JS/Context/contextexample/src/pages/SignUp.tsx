import { Link } from "react-router-dom"
import { Context } from "../contexts/Context"
import { useContext } from "react"

export const SignUp = () => {

    const provider = useContext(Context);

    //ou const {name, age} = useContext(Context); 
    //nome: {name} bla bla bla

    return (
        <div>
            <h1>SignUp</h1>
            <hr />

            <p> Pagina: Nome {provider.name} - idade: {provider.age}</p>

            <Link to="/exibir">Ir para ShowData</Link>
        </div>
    )
}