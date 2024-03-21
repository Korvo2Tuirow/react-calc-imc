"use client"

import { AxiosApp } from '@/components/requisicao/AxiosApp';
import {Requisicao} from '@/components/requisicao/Requisicao';
import { UploadAxios } from '@/components/upload/UploadAxios';
import { Upload } from '@/components/upload/upload';
import React from 'react';

const Page = ()=>{
  return(
    <>
      <div  className="bg-gray-600 w-screen flex justify-center items-center p-4 fixed  gap-10">
        <a className='text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2' href="#req">FETCH</a>
        <a className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" href="#upload">UPLOAD</a>
        <a className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" href="#axios">AXIOS</a>
        <a className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" href="#uploadAxios">UPLOAD AXIOS</a>
      </div>

      <div id='req'><Requisicao/></div>
      
      <div id='upload'><Upload/></div>

      <div id='axios'><AxiosApp/></div>

      <div id='uploadAxios'><UploadAxios/></div>

      
    </>  
      )
}

export default Page;