import { Question } from "@/types/Question"
import { useState } from "react";

type Props = {
    question: Question;
    count: number;
    aoResponder: (responder: number) => void;
}
export const QuestionItem = ({ question, aoResponder, count }: Props) => {

    const [selectResposta, setSelectResposta] = useState<number | null>(null);

        const checkQuestion = (key: number) => {
            if (selectResposta === null) {
                setSelectResposta(key);
                
                setTimeout(()=>{
                aoResponder(key);
                setSelectResposta(null)
                },1500)
                
            }
        }

    return (

        <div>
            <div className="text-3xl font-bold mb-5"> {count}. {question.question}</div>
            <div >
                {question.options.map((item, key) => (
                    <div
                        key={key}
                        onClick={() => checkQuestion(key)}
                        className={`border-2 border-gray-400 rounded-md mb-3 p-3  bg-blue-100
                        
                        ${selectResposta !== null ? 'cursor-auto hover:opacity-100' : 'hover:opacity-60 cursor-pointer'}
                        ${selectResposta !== null && selectResposta === question.resposta && selectResposta === key && 'bg-green-300'}
                        ${selectResposta !== null && selectResposta !== question.resposta && selectResposta === key && 'bg-red-300'}
                        
                        
                        `}
                    >{item}</div>

                )

                )}
            </div>

        </div>




    )
}