import { ReactNode } from 'react';
import './globals.css';
import { Metadata } from 'next';

export const metadata: Metadata={
  title: {
    template:'%s - B7Web',
    default:'B7Web'
  }
}

type Props ={
  children: ReactNode;
}

const layout =({children}:Props)=>{
  return(
    <html>
      <body>
        <h1 className=' bg-emerald-900 p-10 flex justify-center m-5'>LAYOUT</h1>
        <div>
          {children}
        </div>

      </body>
    </html>
  )
}

export default layout;