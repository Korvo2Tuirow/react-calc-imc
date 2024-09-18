import { useEffect, useState } from "react";
import { api } from "./api";
import { Link } from "react-router-dom";
import { Back } from "./back";
import { Albums } from "./types";

export const Request = () => {

  const itemPerPage = 10;
  const [data, setData] = useState<Albums[]>([])
  const [currentPage, setCurrentPage] = useState(0);
  const pages = Math.ceil(data.length / itemPerPage);
  const startIndex = currentPage * itemPerPage;
  const endIndex = startIndex + itemPerPage;
  const currentItem = data.slice(startIndex, endIndex);

  const getAlbuns = async () => {
    const res = await api.getAlbums("albums");
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
        <Link
          key={item.id}
          to={`/album/${item.id}`}>
          <div
            className="bg-slate-200 my-2 p-2 cursor-pointer"
          >{item.title}
          </div>
        </Link>
      ))}

      <div className="flex justify-center">
        {Array.from(Array(pages), (_, index) => {
          return <button key={index}
            className={`p-2 border ${currentPage === index ? 'border-blue-500' : 'border-slate-300'} bg-slate-300 ml-2 rounded-md border-2`}
            value={index}
            onClick={(e) => handleClickPage(e, setCurrentPage)}>{index + 1}</button>
        })}
      </div>

      <Back />

    </div>

  )
}