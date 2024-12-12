import { redirect } from "next/navigation";


const Page = ()=>{

    redirect('/');

    return(
        <div>
            Tela 2
        </div>
    )
}

export default Page;