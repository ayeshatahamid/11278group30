import React, {useRef, useEffect, useState} from 'react';
//import logo from './logo.svg';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';
import { Home, Tutorial } from "./pages";

function App() {
  <BrowserRouter>
      {/* <Menu /> */}
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/tutorial" exact component={Tutorial} />
      </Switch>
    </BrowserRouter>

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
  
   const takePhoto = () => {
     const width = 414;
     const height = width / (16/9);

     let video = videoRef.current;
     let photo = photoRef.current;

     photo.widht = width;
     photo.height = height;

     let ctx = photo.getContext('2d');
     ctx.drawImage(video, 0, 0, width, height);
     setHasPhoto(true);
   }

   const closePhoto = () => {
    let photo = photoRef.current;
    let ctx = photo.getContext('2d');

    ctx.clearRect(0, 0, photo.width, photo.height);

    setHasPhoto(false);

   }

   useEffect(() => {
      getVideo();
   }, [videoRef])


  return (
    <div className="App">
      <div className="camera">
        <video ref={videoRef}></video>
          <button onClick={takePhoto}>Take Photo</button>
      </div>
      <div className={'result ' + (hasPhoto ? 'hasPhoto'
      : '')}>
        <canvas ref={photoRef}></canvas>
        <button onClick={closePhoto}> Retake Picture</button>
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