import { useEffect, useState } from "react";
import { api } from "./api";

type Album = {
  userId: number;
  id: number;
  title: string;
}

export const Album = () => {

  const itemPerPage = 10;
  const [data, setData] = useState<Album[]>([])
  const [currentPage, setCurrentPage] = useState(0);
  const pages = Math.ceil(data.length / itemPerPage);
  const startIndex = currentPage * itemPerPage;
  const endIndex = startIndex + itemPerPage;
  const currentItem = data.slice(startIndex, endIndex);

  const getAlbuns = async () => {
    const res = await api.getAlbum("albums");
    setData(res);
  }

  useEffect(() => {
    getAlbuns();
  }, []);


  const handleClickPage = (e: React.MouseEvent<HTMLButtonElement>, setCurrentPage: (page: number) => void) => {
    const page = Number(e.currentTarget.value);
    setCurrentPage(page);

  }

  return (
    <div>
      <h1>ROUTES ALBUM AXIOS</h1>

      {currentItem.map((item) => (
        <div
          className="bg-slate-200 my-2 p-2"
          key={item.id}>{item.title}
        </div>
      ))}

      <div className="flex justify-center">
        {Array.from(Array(pages), (_, index) => {
          return <button key={index}
            className={`p-2 border ${currentPage === index ? 'border-blue-500' : 'border-slate-300'} bg-slate-300 ml-2 rounded-md border-2`}
            value={index}
            onClick={(e) => handleClickPage(e, setCurrentPage)}>{index + 1}</button>
        })}
      </div>

    </div>

  )
}