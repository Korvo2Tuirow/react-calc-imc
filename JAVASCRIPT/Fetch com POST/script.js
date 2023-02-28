async function inserirPost(){

    document.querySelector('#posts').innerHTML = "Carregando";

    let req = await fetch('https://jsonplaceholder.typicode.com/posts',{
    
        method: 'POST',
        body: JSON.stringify({
            title: "Titulo de teste",
            body:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus nulla, quisquam commodi blanditiis doloribus, fugit nostrum dolore cupiditate laboriosam magni cum assumenda at impedit iure quibusdam dolor eveniet non quaerat?",
            userId: 4
        }),
        headers: {
            'Content-Type': 'application/json'
        }




    });

    let json = await req.json();

    console.log(json);

}