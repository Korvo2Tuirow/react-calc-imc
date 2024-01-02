import { questions } from '@/data/questions';
import{ useState } from 'react';
import { QuestionItem } from './QuestionItem';
import { count } from 'console';
export const Quiz = () =>{
    
    const [currentQuestion, setCurrentQuestion] = useState(0);

    const title = "Quiz de Culinaria";
    
    const handleAnswered = (resposta:number) =>{

    }
    
    
    return(
        <div className=" w-full h-screen flex justify-center items-center bg-blue-600">
            <div className="w-full max-w-xl rounded-md bg-white text-black border-2 border-gray-500">
               <div className="p-5 font-bold text-2xl shadow border-b border-gray-300">{title}</div>

               <div className="p-5 ">
                <QuestionItem
                    question={questions[currentQuestion]}
                    count={currentQuestion +1}
                    aoResponder={handleAnswered}
                />
               </div>
               
               <div className="p-5 text-center border-t border-gray-300">
                {currentQuestion + 1} de {questions.length} Pergunta{questions.length === 1 ? '' : 's'}
               </div>
            </div>
            
        </div>
    )
}

