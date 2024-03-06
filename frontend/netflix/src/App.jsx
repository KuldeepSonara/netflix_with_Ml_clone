  // App.jsx
  import React, { useState, useEffect } from 'react';
  import './App.scss';
  import Home from './pages/home/Home';
  import IntroPage from './pages/introPage/IntroPage'; 
import Play from './pages/play/Play';
import Ragister from './pages/ragister/ragister1/ragister';
import Ragister1 from './pages/ragister/Ragister';
import Login from './pages/ragister/login/Login';
import {
  BrowserRouter,
  Navigate ,
  Route,
  Routes,
} from "react-router-dom";
import { Movie } from '@material-ui/icons';

  function App() {
    const [screenLoading, setScreenLoading] = useState(true);
    const user = true;
    useEffect(() => {
      setTimeout(() => {
        setScreenLoading(false);
      }, 4110);
    }, []);
    const handleTransitionComplete = () => {
      setScreenLoading(false);
    };
    return (
      <>
        {screenLoading ? (
          <IntroPage onTransitionComplete={handleTransitionComplete}/>
        ) : (
          <BrowserRouter>
            <Routes>
                <Route exact path="/" element={user ? <Home /> : <  Navigate to="Rgister" />} />
                <Route exact path="/Rgister" element={!user ? <Ragister /> : <  Navigate to="/" />} />
                <Route path="/login" element={!user ? <Login /> : <  Navigate to="/" />} />
                {user &&
                (
                  <>
                  <Route path="/movies" element={<Home type="movies"/>} />
                  <Route path="/series" element={<Home type="series"/>} />
                  <Route path="/play" element={<Play/>} />
                  </> 
                )
                }
            </Routes>
          </BrowserRouter>
        )}
      </>
    );
  }

  export default App;
