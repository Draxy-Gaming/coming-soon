import React from 'react';
import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';

import '@leenguyen/react-flip-clock-countdown/dist/index.css';

import VideoBg from '../src/assets/video.mp4';
const App = () => {

  return <section className='page'>

    <div className='overlay'></div>
    <video src={VideoBg}></video>
      </section>;
};

export default App;
