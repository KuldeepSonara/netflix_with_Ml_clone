// Listitem.jsx
import React, { useEffect, useState } from "react";
import {
  PlayArrow,
  Add,
  ThumbUpAltOutlined,
  ThumbDownOutlined,
} from "@material-ui/icons";
import "./Listitem.scss";
import axios from "../../api";
import { Link } from "react-router-dom";

export default function Listitem({ index, item }) {
  const [isHovered, setIsHovered] = useState(false);
  const [movie, setMovie] = useState({});

  useEffect(()=>{
    const getMovie = async ()=>{
      try {
        const res = await axios.get("/movie/find/"+item,{
          headers: {
            token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YjkxMWYwMjM5MjAxMTBhNTA3NGJmNCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcwOTczODE0NiwiZXhwIjoxNzEwMTcwMTQ2fQ.tgZOLGZVA1sepB0vM1pFaXMy7ef_pbNj_cssxznfpy0"
          },
        });
        setMovie(res.data);
      } catch (error) {
        console.error("Error fetching movie:", error);
      }
    }
    getMovie()
  },[item])
  
  return (
  <Link to={{pathname:"/play", movie:movie}}>
    <div
      className={`listItem ${isHovered ? "hovered" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      
      style={{
        left: isHovered ? index * 225 - 50 + index * 2.5 : index * 200,
        
      }}
      >
      <img 
        src={movie.img}
        alt=""
        />
      {isHovered && (
        <>
          <video src={movie.trailer} autoPlay={true} loop />
          <div className="itemInfo">
            <div className="icons">
              <PlayArrow className="icon" />
              <Add className="icon" />
              <ThumbUpAltOutlined className="icon" />
              <ThumbDownOutlined className="icon" />
            </div>
            <div className="itemInfoTop">
              <span>{movie.duration}</span>
              <span className="limit">{movie.limit}</span>
              <span>{movie.year}</span>
            </div>
            <div className="desc">
              {movie.desc}
            </div>
            <div className="genre">{movie.genre}</div>
          </div>
        </>
      )}
    </div>
  </Link>
  );
}
