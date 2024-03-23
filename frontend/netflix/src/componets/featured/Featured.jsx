import { InfoOutlined, PlayArrow } from '@material-ui/icons';
import React, { useEffect, useRef, useState } from 'react';
import './Featured.scss';
import List from '../list/List';
import * as THREE from 'three';
import ImageEffect from '../../animation/imageffct/ImageEffect';
import axios from '../../api';

const Featured = ({type }) => {
  const [content, setContent] = useState({});

  useEffect(()=>{
    const getRandomContent = async()=>{
      try {
        const res = await axios.get(`movie/random?type=${type}`,{
        headers: {
          token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YjkxMWYwMjM5MjAxMTBhNTA3NGJmNCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcxMTA3NDQxMCwiZXhwIjoxNzExNTA2NDEwfQ.eTx8OaFDMFh-Ejc9SiJnW9oAMjHmt6TqXAQ_SZ3M7Ro"
        }
      },);
        setContent(res.data[0])
      } catch (error) {
        console.log(error);
      }
    };
    getRandomContent();

  },[type])
  return (
    <div className='featured'>
      {type && (
        <div className="category">
          <span>{type === 'movies' ? "Movies" : "Series"}</span>
          <select name="genre" id="genre">
          <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
      <div className="background"></div>
      <div className="overlay"></div>
      {/* <ImageEffect imageUrl={imageUrl} /> */}
        <img src={content.img} className='img1' alt="" />
        <div className="layerinfo-1">
          <div className="info">
              <img src={content.imgtitle} alt="" />
              <span className="desc">
                {content.desc}
              </span>
              <div className="buttons">
                  <button className="play">
                    <PlayArrow/>
                    <span>Play</span>
                  </button>
                  <button className="more">
                    <InfoOutlined/>
                    <span>Info</span>
                  </button>
              </div>
          </div>
        </div>
    </div>
  )
}

export default Featured