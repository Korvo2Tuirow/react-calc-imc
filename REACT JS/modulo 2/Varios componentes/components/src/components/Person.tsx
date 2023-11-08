const getDay = (hoje:Date) =>{
    return new Intl.DateTimeFormat('pt-BR', {weekday: 'long'}).format(hoje);
}

export const Person = () =>{

    const hoje:Date = new Date();

    const data = {    
        name : 'Korvo Tuirow',
        url :"https://live.staticflickr.com/7521/15517625080_06a5378f58.jpg"
    };



    return (
        <>
            <h1 style={{color:"red", fontSize:"30px"}}>{data.name} - {getDay(hoje)}</h1>
            <img src={data.url}/>
        
        </>
    )
}