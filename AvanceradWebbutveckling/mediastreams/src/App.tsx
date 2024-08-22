import './App.css';
import { useRef, useState } from 'react';

function App() {
  const videoElem = useRef<HTMLVideoElement>(null);
  const imageElem = useRef<HTMLImageElement>(null);
  const [imageGallery, setImageGallery] = useState([]);

  async function startVideo() {
    if (!videoElem.current) return;

    const video = videoElem.current;

    const stream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: false, // hämta in ljud för att slippa rundgång i klassrummet
    });

    video.addEventListener('loadeddata', () => {
      video?.play();
    });

    video.srcObject = stream;
  }

  function takePicture() {
    // 1. Starta strömmen - klart
    // 2. Kopiera innehållet i <video> till en <canvas>
    // - 2b. Skapa ett canvas-element
    // - 2c. Anpassa storleken på canvas för att kopiera rätt
    // 3. Be <canvas> om en Blob
    // 4. Skapa en "object URL" av Blob
    // 5. Be <img> att visa "object URL"

    if (!videoElem.current) return;

    const canvasElem: HTMLCanvasElement = document.createElement('canvas');
    const canvasContext: CanvasRenderingContext2D | null =
      canvasElem.getContext('2d');

    const width = videoElem.current.offsetWidth;
    const height = videoElem.current.offsetHeight;

    canvasElem.width = width;
    canvasElem.height = height;

    canvasContext?.drawImage(videoElem.current, 0, 0, width, height);

    canvasElem.toBlob((blob) => {
      if (!imageElem.current || !blob) return;

      const imageUrl = URL.createObjectURL(blob);
      console.log(imageUrl);
      imageElem.current.src = imageUrl;

      if(!JSON.parse(localStorage.getItem('images'))){
        localStorage.setItem('images', JSON.stringify([]));
      }
  
      const images = JSON.parse(localStorage.getItem('images'));
      localStorage.setItem('images', JSON.stringify([...images, imageUrl]));
    });
  }

  return (
    <main>
      <video controls src='' ref={videoElem}></video>
      <img src='' ref={imageElem} />
      <button onClick={startVideo}>Starta video</button>
      <button onClick={takePicture}>Ta en bild</button>
      <section></section>
    </main>
  );
}

export default App;
