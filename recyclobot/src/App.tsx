import React, {useRef, useEffect, useState} from 'react';
//import logo from './logo.svg';
import './App.css';

function App() {
   const videoRef = useRef(null);
   const photoRef = useRef(null);

   const [hasPhoto, setHasPhoto] = useState(false);

   const getVideo = () => {
     navigator.mediaDevices
     .getUserMedia({ 
       video: { width: 1920, height: 1080 } 
      })
      .then(stream => {
        let video = videoRef.current;
        video.srcObject = stream;
        video.play();
      })
      .catch(err => {
        console.error(err);
      })
   }
  

   useEffect(() => {
      getVideo();
   }, [videoRef])


  return (
    <div className="App">
      <div className="camera">
        <video ref={videoRef}></video>
          <button>Take Photo</button>
      </div>
      <div className={'result' + (hasPhoto ? 'hasPhoto'
      : '')}>
        <canvas ref={photoRef}></canvas>
        <button> Retake Picture</button>
      </div>
      <header className="App-header">
        <code> Recyclobot </code>
        <p>
        Instructions
        </p>

      </header>
    </div>
  );
}

export default App;