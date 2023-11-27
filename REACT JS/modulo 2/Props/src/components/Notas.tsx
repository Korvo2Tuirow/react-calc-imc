import { studentsData } from "@/data/students";
import {StudentType} from "@/types/Student";
import { NOMEM } from "dns";


type Props = {
    students: StudentType[];
}



export const Notas = ({students}:Props)=>{
      
    
    return(
       
        <table className=" w-full border border-gray-500 rounded-md overflow-hidden bg-cyan-950 mb-20">
            <thead>
                <tr className="text-left border-b border-gray-600 bg-gray-800">
                    <th className="p-3">NOME</th>
                    <th className="p-3">STATUS</th>
                    <th className="p-3">NOTA 1</th>
                    <th className="p-3">NOTA 2</th>
                    <th className="p-3">NOTA FINAL</th>
                </tr>
            </thead>

            <tbody>
                {studentsData.map(item=>(
                    <tr key={item.id} className="border-b border-gray-600">
                        
                        <td className="p-3 flex items-center"> 
                        <img src={item.avatar} alt={item.name} className=" w-10 h-10 mr-3 rounded-full" />
                        <div>
                            <div className="flex items-center mr-5 font-bold">{item.name}</div> 
                            <div className="flex items-center">{item.email}</div>
                        </div>
                        </td>
                        
                        <td className=" p-3">
                             {item.active && <div className="px-2 py-2 inline-block rounded-md border border-green-800 bg-green-600">Ativo</div>}
                             {!item.active && <div className="px-2 py-2 inline-block rounded-md border border-red-900 bg-red-600">Inativo</div>}
                        </td>
                        <td className=" p-3">{item.grade1.toFixed(1)}</td>
                        <td className=" p-3">{item.grade2.toFixed(1)}</td>
                        <td className=" p-3 font-bold">{item.active ? (((item.grade1 + item.grade2) / 2).toFixed(1)): '--' }</td>
                    </tr>
                ))}
            </tbody>
        </table>




    );
}