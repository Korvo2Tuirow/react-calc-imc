import { useParams } from "react-router-dom"
import { Back } from "../album/back";

export const AboutItem = ()=>{

    const params = useParams();

    return(
        <div>
            {params.slug}
            <hr />
            <Back/>
        </div>
    )
}