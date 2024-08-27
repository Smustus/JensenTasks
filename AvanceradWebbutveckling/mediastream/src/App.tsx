import './App.css';
import { useEffect, useRef, useState } from 'react';

function App() {
  const videoElem = useRef<HTMLVideoElement>(null);
  const imageElem = useRef<HTMLImageElement>(null);
  const [imageGallery, setImageGallery] = useState<string[]>([]);
  const [message, setMessage] = useState<string>();

  const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
  const SpeechGrammarList = (window as any).SpeechGrammarList || (window as any).webkitSpeechGrammarList;
  const SpeechRecognitionEvent = (window as any).SpeechRecognitionEvent || (window as any).webkitSpeechRecognitionEvent;

  const recognition = new SpeechRecognition();
  const speechRecognitionList = new SpeechGrammarList();
  const words = ['picture', 'cheese', 'banana'];
  const grammar = `#JSGF V1.0; grammar words; public <words> = ${words.join(
    " | ",
  )}`;
  speechRecognitionList.addFromString(grammar, 1);

  useEffect(() => {
    console.log(imageGallery);
    console.log(imageElem);
  }, [imageGallery, imageElem]);

  useEffect(() => {
    const storedImages = localStorage.getItem('images');
    const images: string[] = storedImages ? JSON.parse(storedImages) : [];
    setImageGallery(images);
  }, []);

  async function startVideo() {
    if (!videoElem.current) return;

    const video = videoElem.current;

    const stream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: false,
    });

    video.addEventListener('loadeddata', () => {
      video?.play();
    });

    video.srcObject = stream;

    if (recognition) {
      recognition.grammars = speechRecognitionList;
      recognition.continuous = true; //Controls whether continuous results are captured (true), or just a single result each time recognition is started (false)
      recognition.lang = "en-US"; //Sets the language of the recognition.
      recognition.interimResults = false; //Defines whether the speech recognition system should return interim results, or just final results

      recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        console.log(transcript);
        takePicture();
        setMessage(`Picture successfully taken`);
        console.log(`Picture taken`);
      };

      recognition.onend = async () => {
        await recognition.stop();
        recognition.start();
      };

      recognition.onnomatch = () => {
        setMessage(`No match was found`);
      };


      recognition.onerror = (event: { error: any; }) => {
        setMessage(`Error: ${event.error}`);
      };
    }

    /* recognition.onend = () => {
      recognition.start();
    }; */
  }

  function takePicture() {
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
  
      const storedImages = localStorage.getItem('images');
      const images: string[] = storedImages ? JSON.parse(storedImages) : [];
      const updatedImages = [...images, imageUrl];
      localStorage.setItem('images', JSON.stringify(updatedImages));
      setImageGallery(updatedImages);
    });
  }

  function removeImage(index: number) {
    const updatedImages = imageGallery.filter((_, i) => i !== index);
    setImageGallery(updatedImages);
    localStorage.setItem('images', JSON.stringify(updatedImages));
  }

  return (
    <main>
      <video controls ref={videoElem}></video>
      <img ref={imageElem} />
      <button onClick={() => {
        startVideo();
        if (recognition) recognition.start();
      }
      }>Starta video</button>
      <button onClick={takePicture}>Ta en bild</button>
      <div>
        <p className="output"><em>{message}</em></p>
      </div>
      <section className='imageGallery'>
        {
          imageGallery.map((image: string, i: number) => {
            console.log(image);
            
            return (
              <figure>
                <img key={i} src={image} alt='image' />
                <button onClick={() => removeImage(i)}>Remove</button>
              </figure>
            )
          })
        }
      </section>
    </main>
  );
}

export default App;
