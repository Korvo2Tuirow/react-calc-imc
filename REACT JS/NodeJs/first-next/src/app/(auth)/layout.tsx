import { ReactNode } from 'react';
//import '../globals.css';

type Props ={
  children: ReactNode;
}

const layout =({children}:Props)=>{
  return(
    
      <div>
        <h1 className=' bg-[#371063] p-10 flex justify-center m-5'>AREA DE LOGIN</h1>
        <div>
          {children}
        </div>

      </div>
    
  )
}

export default layout;