// Ragister.jsx

import React, { useEffect, useState } from 'react';
import './Ragister.css';

const Ragister = () => {
  const [isActive, setIsActive] = useState(false);

  const handleHover = () => {
    const signinButton = document.querySelector('.signin');
    signinButton.classList.add('animateout');
    setTimeout(() => {
      signinButton.classList.remove('animateout');
    }, 750);
  };

  const handleSignUpClick = () => {
    const signUpForm = document.querySelector('.signupform');
    signUpForm.classList.toggle('active');
  };

  const handleSignInClick = () => {
    const overlay = document.querySelector('.overlay');
    const signinFormFields = document.querySelectorAll('.signinform-field');
    const inputFields = document.querySelectorAll('input');
    const btSubmit = document.getElementById('btSubmit');
    const btCancel = document.getElementById('btCancel');

    overlay.classList.toggle('active');
    signinFormFields.forEach((field) => field.classList.remove('focus'));
    inputFields.forEach((input) => (input.value = ''));

    // Handle input focus and validation
    inputFields.forEach((input) => {
      input.addEventListener('focus', function () {
        this.parentNode.classList.add('focus');
      });

      input.addEventListener('blur', function () {
        if (this.value === '') {
          this.parentNode.classList.remove('focus');
        }

        const emailValue = document.getElementById('fdEmail').value;
        const passwordValue = document.getElementById('fdPassword').value;

        if (emailValue !== '' && passwordValue !== '') {
          btSubmit.classList.add('active');
        } else {
          btSubmit.classList.remove('active');
        }
      });
    });

    // Handle form submission
    btSubmit.addEventListener('click', function () {
      return false;
    });

    // Handle cancel button click
    btCancel.addEventListener('click', function () {
      overlay.classList.remove('active');
      return false;
    });
  };

  // Autoplay YouTube video setup
  useEffect(() => {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/player_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    tag.onload = () => {
      window.onYouTubePlayerAPIReady = () => {
        const player = new window.YT.Player('video', {
          playerVars: { 'autoplay': 1, 'controls': 1, 'autohide': 1, 'wmode': 'opaque' },
          videoId: 'JW5meKfy3fY',
          events: { 'onReady': onPlayerReady }
        });
      };
    };
  }, []);

  const onPlayerReady = (event) => {
    event.target.mute();
  };

  return (
    <div className='into'>
      <div className="overlay">
        <a href="#" className="signin" onMouseOver={handleHover} onClick={handleSignInClick}>
          Sign In
        </a>
        <a href="#" className="link-signup" onMouseOver={handleHover} onClick={handleSignUpClick}>
          Sign Up
        </a>
        <form className="signinform">
          <div className="signinform-field fadeIn">
            <label htmlFor="fdEmail">Email address</label>
            <input id="fdEmail" type="email" />
          </div>
          <div className="signinform-field fadeIn">
            <label htmlFor="fdPassword">Password</label>
            <input id="fdPassword" type="password" />
          </div>
          <div className="fadeIn">
            <button id="btSubmit" type="submit" className="signin-submit">
              Sign in
            </button>
            <a href="https://www.twitter.com/mixchex" className="link-register">
              No password
            </a>
          </div>
          <div className="cancelarea fadeIn">
            <a href="#" className="cancelbtn" id="btCancel">
              Cancel
            </a>
          </div>
        </form>

        <div className="overlay-svg">
          <svg
            x="0px"
            y="0px"
            viewBox="0 0 2000 1500"
            enableBackground="new 0 0 2000 1500"
          >
            <path
              opacity="0.8"
              fill="#221F1F"
              d="M0,0v1500h2000V0H0z M797.266,815.83c-8.414,1.479-16.974,1.92-25.832,3.1l-27.011-79.113
            v82.512c-8.413,0.885-16.088,2.064-24.059,3.246V674.427h22.437l30.7,85.758v-85.758h23.765V815.83z M885.533,698.043h-41.771
            v31.736c9.152,0,23.174-0.443,31.588-0.443v23.616c-10.481,0-22.731,0-31.588,0.443v35.129c13.875-0.885,27.75-2.068,41.771-2.51
            v22.73l-65.39,5.166V674.425h65.39V698.043z M973.357,698.044h-24.503V806.68c-7.971,0-15.94,0-23.615,0.295V698.043h-24.503
            v-23.618h72.621l-0.003,23.618L973.357,698.044z M1054.537,698.047h-42.806v30.111l0.001-0.001h32.325v23.615h-32.325v53.582
            h-23.175V674.429h65.979V698.047z M1133.063,810.076c-21.106-1.33-42.215-2.658-63.766-3.1V674.427h23.615v110.26l0.002,0.002
            c13.432,0.293,27.012,1.33,40.148,2.064V810.076z M1176.163,813.471c-7.675-0.885-15.647-1.328-23.174-1.771V674.427h23.174V813.471
            z M1279.635,674.429l-29.965,71.884l29.965,79.261c-8.859-1.18-17.712-2.805-26.57-4.279l-16.973-43.689l-17.268,40.148
            c-8.564-1.479-16.828-1.92-25.389-3.104l30.405-69.227l-27.454-70.997h25.388l15.499,39.707l16.531-39.707h25.831L1279.635,674.429z
        "
            />
          </svg>
        </div>
      </div>
      <div className="video-wrapper">
        <div className="ResponsiveYTPlayer">
          <iframe
            id="video"
            src="https://www.youtube.com/embed/cSqi-8kAMmM?autoplay=1&playlist=cSqi-8kAMmM&enablejsapi=1&controls=0&disablekb=1&loop=1&mute=1&start=2&end=12"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Ragister;
