
import { Question } from "@/types/Question"

type Props = {
    questions: Question[],
    respostas: number[]
};

export const Results = ({ questions, respostas }: Props) => {
    return (
        <div>

            {questions.map((item, key) => (
                <div key={key} className="mb-3">
                    <div className="font-bold">{key + 1}. {item.question}</div>

                    <div>
                        <span>({item.resposta === respostas[key] ? 'Acertou' : 'Errou'}) - </span>
                        {item.options[item.resposta]}
                    </div>
                </div>          
                   
                
            ))}
                </div>
            )
}