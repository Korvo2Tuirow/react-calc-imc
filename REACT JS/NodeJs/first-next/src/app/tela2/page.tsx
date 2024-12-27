import { redirect } from "next/navigation";
import Image from "next/image";

const Page = ()=>{

    //redirect('/');

    return(
        <div>
            <p>Tela 2</p>
            <div>
               <Image
                src={'/assets/image2.jpg'}
                width={1080}
                height={720}
                alt="praia"
                quality={100}
               />
            </div>
        </div>
    )
}

export default Page;