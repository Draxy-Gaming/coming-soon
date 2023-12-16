import React, { useState } from 'react';
import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';
import '@leenguyen/react-flip-clock-countdown/dist/index.css';
import './styles.css';

import VideoBg from '../src/assets/video.mp4';

const App = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Perform any additional logic before or after submitting the form
    // For example, you can validate the email or show a loading state

    // Send the email to Formspree
    window.formbutton("submit");
  };

  return (
    <section className='page'>
      <div className='overlay'></div>
      <video src={VideoBg} autoPlay loop muted></video>

      <div className='page__content'>
        <h1>Launching Soon</h1>
        <h3>Leave your email, and we will let you know once we are live.</h3>

        <FlipClockCountdown
          to={new Date().getTime() + 48 * 3600 * 1000 + 5000}
          className='flip-clock'
          labels={['DAYS', 'HOURS', 'MINUTES', 'SECONDS']}
          duration={0.5}
        />

        <form onSubmit={handleFormSubmit}>
          <label>
            Email:
            <input
              type='email'
              value={email}
              onChange={handleEmailChange}
              placeholder='your@email.com'
              required
            />
          </label>
          <button type='submit' className='btn'>
            Notify Me
          </button>
        </form>
      </div>
    </section>
  );
};

export default App;
