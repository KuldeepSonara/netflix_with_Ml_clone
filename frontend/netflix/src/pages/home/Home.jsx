import React, { useEffect, useState } from 'react'
import './Home.scss'
import Navebar from '../../componets/nevbar/Navebar'
import Featured from '../../componets/featured/Featured'
import List from '../../componets/list/List'
import axios from "../../api"
const Home = ({type}) => {
  const imageUrl = "https://r4.wallpaperflare.com/wallpaper/355/966/399/wednesday-addams-wednesday-tv-series-movie-characters-jenna-ortega-emma-myers-hd-wallpaper-394f36bed076a736bd7e274d4e9a7b24.jpg";
  const[lists,setLists] = useState([]);
  const[genre,setGenre] = useState(null);

  useEffect(()=>{
    const getResndomLists = async ()=>{
      try {
        const res = await axios.get('/lists', {
          params: {
            type: type,
            genre: genre,
          },
          headers: {
            token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YjkxMWYwMjM5MjAxMTBhNTA3NGJmNCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcxMTA3NDQxMCwiZXhwIjoxNzExNTA2NDEwfQ.eTx8OaFDMFh-Ejc9SiJnW9oAMjHmt6TqXAQ_SZ3M7Ro"
          },
        });
        setLists(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getResndomLists();
  },[type, genre])
  return (
    <div className='Home'>
        <Navebar/>
        <Featured type={type} imageUrl={imageUrl} />
        {lists.map(list=>(
          <List list={list}/>
        ))}
    </div>
  )
}

export default Home