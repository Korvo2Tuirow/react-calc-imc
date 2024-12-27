
"use client"
import { useRouter } from 'next/navigation';

import { ReactNode, useState } from 'react';

 type Props={
  children: ReactNode
 }
const Layout = ({children}:Props) =>{
    const router = useRouter();
    const[post, setPost] = useState("0")
    const handleClickPost = (e:string)=>{
        setPost(e)
        console.log(post)
      
        router.push(`/blog/${post}`)
    }
  return(
    <html>
      <body>
        <div>
            <input type="number" max={100} className='text-black'
            value={post}
            onChange={(e)=>handleClickPost(e.target.value)}
            
            />
        </div>
        {children}
      </body>
    </html>
  )
}

export default Layout;