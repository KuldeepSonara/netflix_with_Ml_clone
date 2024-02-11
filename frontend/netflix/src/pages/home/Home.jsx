import React from 'react'
import './Home.scss'
import Navebar from '../../componets/nevbar/Navebar'
import Featured from '../../componets/featured/Featured'
import List from '../../componets/list/List'

const Home = () => {
  const imageUrl = "https://r4.wallpaperflare.com/wallpaper/355/966/399/wednesday-addams-wednesday-tv-series-movie-characters-jenna-ortega-emma-myers-hd-wallpaper-394f36bed076a736bd7e274d4e9a7b24.jpg";
  return (
    <div className='Home'>
        <Navebar/>
        <Featured imageUrl={imageUrl}/>
        <List/>
        <List/>
    </div>
  )
}

export default Home