import { questions } from '@/data/questions';
import { useState } from 'react';
import { QuestionItem } from './QuestionItem';
import { Results } from './Results';

export const Quiz = () => {

    const [respostas, setRespostas] = useState<number[]>([])
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const title = "Quiz de Culinaria";

    const loadNovaQuestion = () => {
        if (questions[currentQuestion + 1]) {
            setCurrentQuestion(currentQuestion + 1)
        } else {
            setShowResult(true);
        }
    }


    const handleAnswered = (resposta: number) => {
        setRespostas([...respostas, resposta]);
        loadNovaQuestion();
    }

    const restart= ()=>{
        setCurrentQuestion(0);
        setRespostas([]);
        setShowResult(false);
    }

    return (
        <div className=" w-full h-screen flex justify-center items-center bg-blue-600">
            <div className="w-full max-w-xl rounded-md bg-white text-black border-2 border-gray-500">
                <div className="p-5 font-bold text-2xl shadow border-b border-gray-300">{title}</div>

                <div className="p-5 ">
                    {!showResult &&
                        <QuestionItem
                            question={questions[currentQuestion]}
                            count={currentQuestion + 1}
                            aoResponder={handleAnswered}
                        />
                    }
                    {
                        showResult &&
                        <Results questions={questions} respostas={respostas}/>
                    }
                </div>

                <div className="p-5 text-center border-t border-gray-300">
                    {!showResult &&
                    `${currentQuestion + 1} de ${questions.length} Pergunta${questions.length === 1 ? '' : 's'}
                    `}
                    {showResult &&
                        <button className='px-3 py-2 rounded-md bg-blue-800 text-white' onClick={restart}>Reiniciar Quiz</button>
                    }
                </div>
            </div>

        </div>
    )
}

