
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "SignIn",
  
}

const SignIn = ()=> {
    return (
     <div className="p-5">
      <h1>SignIn</h1>
      <a href="../">Voltar</a>
     </div>
    );
  }
  
  export default SignIn;