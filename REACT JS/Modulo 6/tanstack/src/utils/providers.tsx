"use client";

import { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

type Props={
    children: ReactNode;
}

//instalação do tanstack = npm i @tanstack/react-query
//instalação de uma ferramenta/biblioteca  = npm i @tanstack/react-query-devtools

export const Providers = ({children}:Props)=>{
    const queryClient = new QueryClient();
    
    return(

        <QueryClientProvider client = {queryClient}>
            {children}
            <ReactQueryDevtools
                initialIsOpen={false}
            />
        </QueryClientProvider>


    )
}