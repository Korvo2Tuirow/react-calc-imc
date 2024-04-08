"use client"

import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export type Post = {
  id: number;
  userId: number;
  title: string;
  body: string;
}

const Page = () => {

  const query = useQuery({
    queryKey: ['posts'],
    queryFn: async (): Promise<Post[]> => {
      const result = await axios.get('https://jsonplaceholder.typicode.com/posts');
      return result.data;
    }
  });

  return (
    <div>
      <h1 className="text-3xl text-white">Teste de TanStack</h1>

      {query.isLoading && "CARREGANDO"}

      {query.data &&
        <ul>
          {query.data.map(item => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      }
    </div>
  )
}

export default Page;