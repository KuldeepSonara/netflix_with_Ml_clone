import React, { useEffect, useState } from 'react'
import './Navebar.scss'
import { ArrowDropDown, Notifications, Search } from '@material-ui/icons'


const Navebar = () => { 
  const [isScrolled, setIsScrolled] = useState(false);

  console.log(window.scrollY )
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY ===0 ? false : true);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className={isScrolled ? "Navebar scrolled" : "Navebar"}>
        <div className="container">
            <div className="left">
              <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="" />
              <span>Home</span>
              <span>Series</span>
              <span>Movies</span>
              <span>New Add Populer</span>
              <span>my list</span>
            </div>
            <div className="right">
              <Search  className='icon'/>
              <snap>KID's</snap>
              <Notifications className='icon'/>
              
              <img src="https://images.pexels.com/photos/1310522/pexels-photo-1310522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              <div className="profile">
                  <ArrowDropDown className='icon'/>
                  <div className="options">
                    <span>settings</span>
                    <span>Logout</span>
                  </div>
              </div>
              
            </div>
        </div>
    </div>
  )
}

export default Navebar