import React, { useEffect, useState } from 'react';
import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';
import '@leenguyen/react-flip-clock-countdown/dist/index.css';
import './styles.css';

import VideoBg from '../src/assets/video.mp4';

const App = () => {
  // Retrieve the stored timestamp or set a default value
  const storedTimestamp = parseInt(localStorage.getItem('countdownTimestamp'), 10) || new Date().getTime() + 48 * 3600 * 1000 + 5000;

  // State to manage the countdown target timestamp
  const [countdownTarget, setCountdownTarget] = useState(storedTimestamp);

  // Effect to update localStorage when countdownTarget changes
  useEffect(() => {
    localStorage.setItem('countdownTimestamp', countdownTarget.toString());
  }, [countdownTarget]);

  return (
    <section className='page'>
      <div className='overlay'></div>
      <video src={VideoBg} autoPlay loop muted></video>

      <div className='page__content'>
        <h1>Launching Soon</h1>
        <h3>Stay tuned for our exciting launch!</h3>

        {/* Pass countdownTarget to FlipClockCountdown */}
        <FlipClockCountdown
          to={countdownTarget}
          className='flip-clock'
          labels={['DAYS', 'HOURS', 'MINUTES', 'SECONDS']}
          duration={0.5}
        />

        <button className='btn' onClick={() => setCountdownTarget(new Date().getTime() + 48 * 3600 * 1000 + 5000)}>
          Notify Me
        </button>
      </div>
    </section>
  );
};

export default App;
