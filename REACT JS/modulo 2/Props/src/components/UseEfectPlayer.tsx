import { useState } from "react"
import { VideoPlayer } from "./VideoPlayer";

export const UseEfectPlayer = () => {

    const [playing, setPlaying] = useState(false);


    return (
        <div className="flex flex-col justify-center items-center bg-gradient-to-r to-orange-500 from-green-500 pt-20">
            <h1 className="text-4xl font-bold shadow-2xl shadow-slate-950 p-5 rounded-2xl">Player com UseEfect</h1>
            <VideoPlayer
                src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
                isPlaying={playing}
            />
            <div className="p-10 flex flex-col justify-center items-center gap-5">
                <p>{playing ? 'RODANDO' : 'PAUSADO'}</p>
                <button onClick={() => setPlaying(!playing)}
                 className="rounded-md bg-teal-200 text-black font-bold hover:scale-105 shadow-2xl shadow-slate-950 p-5">Play/Pause</button>
            </div>


        </div>
    )
}