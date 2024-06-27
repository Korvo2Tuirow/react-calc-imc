import { useContext, useEffect, useState } from "react"
import { NumContext } from "./ContextNumRandom";
import { AudioPlayer } from "./audioPlayer";



export const Verif = () => {

    const Ctx = useContext(NumContext);
    const [playing, setPlaying] = useState(false)

    const audioPlay = () => {
        const audio = new Audio('./sound/WhatsappCortos.mp3');
        audio.play();
    }

    const l1 = Ctx?.numRandomProv.slice(0, 3);
    const l2 = Ctx?.numRandomProv.slice(3, 6);
    const l3 = Ctx?.numRandomProv.slice(6, 9);
    const c1 = [Ctx?.numRandomProv[0], Ctx?.numRandomProv[3], Ctx?.numRandomProv[6]];
    const c2 = [Ctx?.numRandomProv[1], Ctx?.numRandomProv[4], Ctx?.numRandomProv[7]];
    const c3 = [Ctx?.numRandomProv[2], Ctx?.numRandomProv[5], Ctx?.numRandomProv[8]];

    useEffect(() => {


        if (c1?.every(v1 => v1 === c1[0])) {
            setPlaying(playing)
            audioPlay();
            Ctx?.setAnimaC1("shakelr")
            document.getElementById("id0")?.classList.add(`${Ctx?.animaC1}`);
            document.getElementById("id3")?.classList.add(`${Ctx?.animaC1}`);
            document.getElementById("id6")?.classList.add(`${Ctx?.animaC1}`);
            Ctx?.setFezTrio(true);

        } else { Ctx?.setAnimaC1("null") };

        if (c2?.every(v2 => v2 === c2[0])) {
            setPlaying(playing)
            audioPlay();
            Ctx?.setAnimaC2("shakelr")
            document.getElementById("id1")?.classList.add(`${Ctx?.animaC2}`);
            document.getElementById("id4")?.classList.add(`${Ctx?.animaC2}`);
            document.getElementById("id7")?.classList.add(`${Ctx?.animaC2}`);
            Ctx?.setFezTrio(true);

        } else { Ctx?.setAnimaC2("null") };

        if (c3?.every(v3 => v3 === c3[0])) {
            setPlaying(playing)
            audioPlay();
            Ctx?.setAnimaC3("shakelr")
            document.getElementById("id2")?.classList.add(`${Ctx?.animaC3}`);
            document.getElementById("id5")?.classList.add(`${Ctx?.animaC3}`);
            document.getElementById("id8")?.classList.add(`${Ctx?.animaC3}`);
            Ctx?.setFezTrio(true);

        } else { Ctx?.setAnimaC3("null") };

        if (l1?.every(v4 => v4 === l1[0])) {
            setPlaying(playing)
            audioPlay();
            Ctx?.setAnimaH1("shakelr")
            document.getElementById("id0")?.classList.add(`${Ctx?.animaH1}`);
            document.getElementById("id1")?.classList.add(`${Ctx?.animaH1}`);
            document.getElementById("id2")?.classList.add(`${Ctx?.animaH1}`);
            Ctx?.setFezTrio(true);

        } else { Ctx?.setAnimaH1("null") };


        if (l2?.every(v5 => v5 === l2[0])) {
            setPlaying(playing)
            audioPlay();
            Ctx?.setAnimaH2("shakelr")
            document.getElementById("id3")?.classList.add(`${Ctx?.animaH2}`);
            document.getElementById("id4")?.classList.add(`${Ctx?.animaH2}`);
            document.getElementById("id5")?.classList.add(`${Ctx?.animaH2}`);
            Ctx?.setFezTrio(true);

        } else { Ctx?.setAnimaH2("null") };


        if (l3?.every(v6 => v6 === l3[0])) {
            setPlaying(playing)
            audioPlay();
            Ctx?.setAnimaH3("shakelr")
            document.getElementById("id6")?.classList.add(`${Ctx?.animaH3}`);
            document.getElementById("id7")?.classList.add(`${Ctx?.animaH3}`);
            document.getElementById("id8")?.classList.add(`${Ctx?.animaH3}`);
            Ctx?.setFezTrio(true);

        } else { Ctx?.setAnimaH3("null") };


    });

    return (
        <div>

            <AudioPlayer src="./sound/WhatsappCortos.mp3"
                isPlaying={playing} />
        </div>
    )


}