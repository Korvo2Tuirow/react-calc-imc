"use client"

import { AxiosApp } from '@/components/requisicao/AxiosApp';
import {Requisicao} from '@/components/requisicao/Requisicao';
import { UploadAxios } from '@/components/upload/UploadAxios';
import { Upload } from '@/components/upload/upload';
import React from 'react';

const Page = ()=>{
  return(
    <>
      <div  className="bg-gray-100 w-screen flex justify-center items-center p-4 fixed gap-10">
        <a className='p-2 bg-green-300 rounded-md hover:scale-110' href="#req">FETCH</a>
        <a className='p-2 bg-green-300 rounded-md hover:scale-110' href="#upload">UPLOAD</a>
        <a className='p-2 bg-green-300 rounded-md hover:scale-110' href="#axios">AXIOS</a>
        <a className='p-2 bg-green-300 rounded-md hover:scale-110' href="#uploadAxios">UPLOAD AXIOS</a>
      </div>

      <div id='req'><Requisicao/></div>
      
      <div id='upload'><Upload/></div>

      <div id='axios'><AxiosApp/></div>

      <div id='uploadAxios'><UploadAxios/></div>

      
    </>  
      )
}

export default Page;