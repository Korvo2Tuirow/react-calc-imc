import { useContext } from "react"
import { Link } from "react-router-dom"
import { Context } from "../contexts/Context"

export const ShowData = () => {

    const provider = useContext(Context)

    return (
        <div>
            <h1>ShowData</h1>
            <hr />
            <p>{provider.name}</p>

            <Link to="/">Ir para SignUp</Link>
        </div>
    )
}