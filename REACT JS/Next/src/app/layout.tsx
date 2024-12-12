

import { ReactNode } from 'react';
import './globals.css';
 type Props={
  children: ReactNode
 }
const Layout = ({children}:Props) =>{
  return(
    <html>
      <body>
        {children}
      </body>
    </html>
  )
}

export default Layout;