"use client"
import { usePost, usePosts } from "@/utils/queries";


const Page = () => {

  const posts = usePosts();
  const post = usePost(10);

  return (
    <div>
      <h1 className="text-3xl flex justify-center p-3 text-white">Teste de TanStack</h1>

      {posts.isLoading &&

        <div className="socket">
          <div className="gel center-gel">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c1 r1">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c2 r1">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c3 r1">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c4 r1">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c5 r1">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c6 r1">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>

          <div className="gel c7 r2">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>

          <div className="gel c8 r2">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c9 r2">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c10 r2">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c11 r2">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c12 r2">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c13 r2">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c14 r2">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c15 r2">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c16 r2">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c17 r2">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c18 r2">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c19 r3">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c20 r3">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c21 r3">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c22 r3">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c23 r3">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c24 r3">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c25 r3">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c26 r3">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c28 r3">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c29 r3">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c30 r3">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c31 r3">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c32 r3">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c33 r3">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c34 r3">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c35 r3">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c36 r3">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c37 r3">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>

        </div>

      }



      {posts.data &&
        <ul>
          {posts.data.map(item => (
            <li key={item.id} className="m-5 p-2 border border-white rounded-md bg-white/20">{item.title.toUpperCase()}<hr />
              <p>{item.body}</p>
            </li>
          ))}
        </ul>
      }
      <hr />

      <ul>
        {post.data &&
          <li className="m-5 p-2 border border-white rounded-md bg-[#f5f2]">{post.data.title.toUpperCase()}<hr />
            <p>{post.data.body}</p>
          </li>
        }
      </ul>

    </div>
  )
}

export default Page;