"use client"
/*
import dynamic from "next/dynamic";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

export default function M3U8Player() {
  return (
    <div>
      <h2>Streaming HLS (M3U8)</h2>
      <ReactPlayer 
        url="https://canalzinhu.fazoeli.co.za/token/3aed46506b9c053685157a56814e34de/megaflix.m3u8" // Link de exemplo
        playing
        controls
        width="100%"
        height="500px"
      />
    </div>
  );
}


import { useEffect, useRef } from "react";
import Hls from "hls.js";

export default function CustomHLSPlayer() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      const video = videoRef.current;
      const hls = new Hls();

      hls.loadSource("https://canalzinhu.fazoeli.co.za/token/3aed46506b9c053685157a56814e34de/megaflix.m3u8"); // Seu link M3U8
      hls.attachMedia(video);
    }
  }, []);

  return (
    <div className="flex  justify-center mb-6">
          <video ref={videoRef} controls width="80%" height="auto" />
    </div>
  );
}


*/

import { useEffect, useRef, useState } from "react";
import Hls from "hls.js";

export default function HLSPlayer() {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [hls, setHls] = useState<Hls | null>(null);

    useEffect(() => {
        if (videoRef.current) {
            const video = videoRef.current;
            const hlsInstance = new Hls({
                maxBufferLength: 10, // Mantém apenas 10 segundos de buffer
                maxBufferSize: 10 * 1000 * 1000, // Limita buffer a 10MB
                maxMaxBufferLength: 20,// No máximo 20s de buffer
                startPosition: -20
            });

            hlsInstance.loadSource("https://soqzlgevoq9t.milocdn.com/hls2/01/02758/9kq28o2pihlp_,l,n,.urlset/master.m3u8?t=KP1vRvKP_sogwcqObR7YpycWVQGh80fmBa2X1jjQERE&s=1739553429&e=129600&f=13792009&srv=st46KlqWmALq&i=0.4&sp=500&p1=st46KlqWmALq&p2=st46KlqWmALq&asn=28649");
            hlsInstance.attachMedia(video);
            hls?.latency;
            setHls(hlsInstance);
        }

        return () => {
            if (hls) {
                hls.destroy(); // Remove o player da memória ao desmontar o componente
            }
        };

    }, []);

   
    return (
        <div className="flex flex-col items-center gap-5 mb-5">
            <h2>Player HLS com Limpeza de Memória</h2>        
            <video ref={videoRef} controls autoPlay width="80%" height="auto" />
        </div>
    );
}
