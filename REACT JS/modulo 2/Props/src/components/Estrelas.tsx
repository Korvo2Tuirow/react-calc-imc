type Props = {

    nota: number;
   

}

export const Estrelas = ({nota}: Props) =>{
    if(nota > 5) nota = 5;
    if(nota < 0 ) nota = 0;

    const notaInt = Math.floor(nota);

    const stars = "\u2605".repeat(notaInt) + "\u2606".repeat(5 - notaInt)  ;

    const emoji = ["\u{1F62D}", "\u{1F622}", "\u{1F641}", "\u{1F612}", "\u{1F60A}","\u{1F600}"];

    let emojis="";
    if(notaInt > 0){
    emojis = emoji[notaInt].repeat(notaInt) + "\u{1F636}".repeat(5 - notaInt);
    }else{
    emojis = emoji[0].repeat(5)
    }


    
    return(
      <>
        <div className="flex justify-center items-center w-full p-16 border-2 border-green-300 bg-gradient-to-r from-amber-400 to-red-800 text-6xl">
            <div className="bg-gray-700">{nota.toFixed(1)}</div>
            <div className="ml-3">{stars}</div>
        </div>
          <div className="flex justify-center items-center w-full p-16 border-2 border-green-300 bg-gradient-to-r from-amber-400 to-red-800 text-6xl">
          <div className="bg-gray-700">{nota.toFixed(1)}</div>
          <div className="ml-3">{emojis}</div>
         </div>
      </>
        
)
}