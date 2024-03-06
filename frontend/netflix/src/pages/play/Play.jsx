import { ArrowBackIosOutlined } from '@material-ui/icons'
import "./Play.scss"
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
const Play = () => {
  const [showBackButton, setShowBackButton] = useState(true);

  useEffect(() => {
    let timeout;

    const handleMouseEnter = () => {
      setShowBackButton(true);
      clearTimeout(timeout);
    };

    const handleMouseLeave = () => {
      timeout = setTimeout(() => {
        setShowBackButton(false);
      }, 2000); // Adjust the duration in milliseconds (e.g., 2000 for 2 seconds)
    };

    // Attach event listeners for mouse enter and leave
    const watchDiv = document.querySelector('.video'); // Assuming the mouse events are related to the video container
    if (watchDiv) {
      watchDiv.addEventListener('mouseenter', handleMouseEnter);
      watchDiv.addEventListener('mouseleave', handleMouseLeave);
    }

    // Cleanup event listeners on component unmount
    return () => {
      if (watchDiv) {
        watchDiv.removeEventListener('mouseenter', handleMouseEnter);
        watchDiv.removeEventListener('mouseleave', handleMouseLeave);
      }
      clearTimeout(timeout);
    };
  }, []);   
  return (
    <div>
        
        <div className="video"> 
        <div >
 
        <iframe style={{ width: '100%', height: '100%', position: 'absolute', left: 0, top: 0, overflow: 'hidden' }} frameborder="0" type="text/html" src="https://www.dailymotion.com/embed/video/x8hcwif?autoplay=1" width="100%" height="100%" allowfullscreen  title="Dailymotion Video Player" allow="autoplay"/>
        </div>
        </div>
        <div className='watch'>
        {showBackButton && 
          <Link to="/">
        <div className="back">
            <ArrowBackIosOutlined/>  
            Home
        </div>  
          </Link>
  }
  </div>
    </div>
  )
}

export default Play