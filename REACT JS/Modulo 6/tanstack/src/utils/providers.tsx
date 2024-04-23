"use client";

import { ReactNode } from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { queryClient } from "./queryClient";

type Props={
    children: ReactNode;
}

//instalação do tanstack = npm i @tanstack/react-query
//instalação de uma ferramenta/biblioteca  = npm i @tanstack/react-query-devtools

export const Providers = ({children}:Props)=>{

    
    return(

        <QueryClientProvider client = {queryClient}>
            {children}
            <ReactQueryDevtools
                initialIsOpen={false}
            />
        </QueryClientProvider>


    )
}