import { ReactNode } from 'react';
import './globals.css';
import { Metadata } from 'next';
import Link from 'next/link';

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
        <div className=' bg-emerald-900 p-10 flex justify-center m-5'>
          
          <Link href={'./'} replace>Home</Link>
        </div>
        <div>
          {children}
        </div>

      </body>
    </html>
  )
}

export default layout;