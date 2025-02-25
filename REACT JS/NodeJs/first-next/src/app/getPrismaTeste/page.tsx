"use client"; // Se estiver usando Next.js App Router

import { useEffect, useState } from "react";

export type Props={
  id: number,
  url: string,

}
const PrismaTeste = () => {
  const [urls, setUrls] = useState<Props[]>([]);
  const [url, setUrl] = useState(""); // Estado para armazenar a URL digitada
  const [message, setMessage] = useState(""); // Estado para mensagens de sucesso ou erro


  
      const fetchData = async () => {
        try {
          const response = await fetch("/api/getUrls"); // Chama a API
          const data:Props[] = await response.json();
          setUrls(data);
          console.log(data);
        } catch (error) {
          console.error("Erro ao buscar URLs:", error);
        }
      };

  

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();

      if (!url.trim()) {
        setMessage("Por favor, insira uma URL válida.");
        return;
      }

      try {
        const response = await fetch("/api/addUrl", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ url }),
        });

        const data = await response.json();

        if (response.ok) {
          setMessage("URL adicionada com sucesso! 🎉");
          setUrl(""); // Limpa o campo
          fetchData();
        } else {
          setMessage(data.error || "Erro ao adicionar URL.");
        }
      } catch (error) {
        setMessage("Erro ao enviar requisição.");
      }
    };

    useEffect(()=>{
      fetchData();
    },[])
    
    const handleDelete = async (id: number) => {
      try {
        const response = await fetch("/api/delUrl", {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id }),
        });
  
        if (response.ok) {
          setUrls(urls.filter((item) => item.id !== id)); // Atualiza a lista após a exclusão
        } else {
          console.error("Erro ao deletar URL");
        }
      } catch (error) {
        console.error("Erro ao deletar URL:", error);
      }
    };
  
    useEffect(() => {
      fetchData();
    }, []);

  

  return (
    <div className="flex flex-col gap-3 shadow-custom bg-slate-700 border shadow-black p-5"><div>

      {urls.length > 0 ? (
        urls.map((item) => (
          <div key={item.id} className="text-white flex justify-between w-full p-2 rounded-md border my-1">
           <p>◽ {item.url}</p>
           <button
           value={item.id}
           onClick={()=>handleDelete(item.id)}            
           >❌</button>
          </div>
        ))
      ) : (
        <p className="text-white">Carregando...</p>
      )}
    </div>

      <div className="p-5 bg-slate-700 shadow-lg rounded-lg w-full max-w-md mx-auto">
        <h2 className="text-white text-lg font-bold mb-3">Adicionar Nova URL</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            type="text"
            className="p-2 border rounded-lg text-black"
            placeholder="Digite a URL..."
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-700 transition"
          >
            Adicionar URL
          </button>
        </form>
        {message && <p className="text-white mt-2">{message}</p>}
      </div>

    </div>
  );
}

export default PrismaTeste;
