'use client'

import { useState } from "react";

export type PersonType = {
id: number;
name: string;
status: string;
species: string;
type?: string;
gender: string;
image: string
}

export const App = ()=>{

  const [ persons, setPersons] = useState<PersonType[]>([]);

  const handleButton = async ()=>{

    const req = await fetch("https://rickandmortyapi.com/api/character/");
    const data = await req.json();
    setPersons(data.results)
    console.log(data.results);
  
  }

  return (
    <div className="flex flex-col gap-6 max-w-full mx-auto p-4 bg-gray-100 rounded-lg shadow-md">
      <button
        onClick={handleButton}
        className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out"
      >
        APERTE AQUI
      </button>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {persons.map((item) => (
          <div
            key={item.id}
            className="p-4 bg-white border border-gray-300 rounded-lg shadow-sm flex flex-col"
          >
            <img
            src={item.image}
            alt={item.name}
            className="rounded-t-lg mb-4"/>
            <p className="text-gray-700 mb-1 ">Nome: {item.name}</p>
            <p className="text-gray-700 mb-1">Status: {item.status}</p>
            <p className="text-gray-700 mb-1">Species: {item.species}</p>
            <p className="text-gray-700 mb-1">Gender: {item.gender}</p>
            {item.type && <p className="text-gray-700">Type: {item.type}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}
export default App;