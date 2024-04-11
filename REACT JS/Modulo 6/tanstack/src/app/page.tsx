"use client"
import { usePost, usePosts } from "@/utils/queries";


const Page = () => {

  const posts = usePosts();
  const post = usePost(10);

  return (
    <div>
      <h1 className="text-3xl flex justify-center p-3 text-white">Teste de TanStack</h1>

      {posts.isLoading && "CARREGANDO"}

      
      
      {posts.data &&
        <ul>
          {posts.data.map(item => (
            <li key={item.id} className="m-5 p-2 border border-white rounded-md bg-white/20">{item.title.toUpperCase()}<hr/>
            <p>{item.body}</p>
            </li>
          ))}
        </ul>
      }
        <hr/>

        <ul>
          {post.data &&
            <li className="m-5 p-2 border border-white rounded-md bg-[#f5f2]">{post.data.title.toUpperCase()}<hr/>
            <p>{post.data.body}</p>
            </li>
          }
        </ul>
      
    </div>
  )
}

export default Page;