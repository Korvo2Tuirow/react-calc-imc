// pages/index.js

import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Home",
  
}

export default function Home() {
  return (
    <div className="p-5">
      <h1>HOME</h1>
      <div className=" flex flex-col gap-3">
        <a href="./sobre" >Sobre</a>
        <a href="./signin" >SignIn</a>
        <a href="./signup" >SignUp</a>
      </div>
    </div>
  )
}