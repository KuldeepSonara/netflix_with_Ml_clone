  // App.jsx
  import React, { useState, useEffect } from 'react';
  import { BrowserRouter } from 'react-router-dom';
  import './App.scss';
  import Home from './pages/home/Home';
  import IntroPage from './pages/introPage/IntroPage'; 
import Play from './pages/play/Play';
import Ragister from './pages/ragister/ragister1/ragister';
import Ragister1 from './pages/ragister/Ragister';
import Login from './pages/ragister/login/Login';
import ImageEffect from './animation/imageffct/ImageEffect';

  function App() {
    const [screenLoading, setScreenLoading] = useState(true);

    useEffect(() => {
      setTimeout(() => {
        setScreenLoading(false);
      }, 4110);
    }, []);
    const handleTransitionComplete = () => {
      setScreenLoading(false);
    };

    
    const imageUrl = "https://r4.wallpaperflare.com/wallpaper/355/966/399/wednesday-addams-wednesday-tv-series-movie-characters-jenna-ortega-emma-myers-hd-wallpaper-394f36bed076a736bd7e274d4e9a7b24.jpg";

    return (
      <>
        {screenLoading ? (
          <IntroPage onTransitionComplete={handleTransitionComplete}/>
        ) : (
          <BrowserRouter>
            <>
            <ImageEffect imageUrl={imageUrl} />
            </>
          </BrowserRouter>
        )}
      </>
    );
  }

  export default App;
