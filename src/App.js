import React from 'react';
import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';

import '@leenguyen/react-flip-clock-countdown/dist/index.css';
import './styles.css';

import VideoBg from '../src/assets/video.mp4';
const App = () => {

  return <section className='page'>

    <div className='overlay'></div>
    <video src={VideoBg} autoPlay loop muted></video>
     
    <div className='page__content'>
      <h1>Launching Soon</h1>
      <h3>Leave your email and we will let you know once we are live.</h3>
    </div>

      </section>;
};

export default App;
