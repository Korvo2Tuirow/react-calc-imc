type Props = {
    params: {
        postId: string;
    }
};

type Posts = {
    id: number;
    userId: number;
    title: string;
    body: string;
};

const Page = async ({ params }: Props) => {
    const req = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`);
    const res: Posts = await req.json();   
   
    return (

        <div>
            <p>{res.id}</p>
            <p>{res.title}</p>

        </div>
    )
}

export default Page;