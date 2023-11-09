type Props = {
    name: string;
    url?: string;
    roles: string[];

}

export const Person = (
        {name, 
        url = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRcieOiIGGX8IvZwvtkTCEK5LuQHMLslKHRg&usqp=CAU",
        roles}: Props) =>{    
   
    return (
       <div className="p-5">
            <h1>{name}</h1>
            <img src={url} className="w-52"/>
            <ul>
                <li>{roles[0]}</li>
                <li>{roles[1]}</li>
            </ul>      
       
       </div>
    )
}