import React from 'react';
import { InfoOutlined, PlayArrow } from '@material-ui/icons';
import ImageEffect from '../../animation/imageffct/ImageEffect';
import './Featured.scss';

const Featured = ({ type, imageUrl }) => {
  return (
    <div className='featured'>
      {type && (
        <div className="category">
          <span>{type === 'movie' ? "Movies" : "Series"}</span>
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
      
      {/* Pass the imageUrl prop to the ImageEffect component */}
      <ImageEffect imageUrl={imageUrl} />
      {/* <img src="https://r4.wallpaperflare.com/wallpaper/355/966/399/wednesday-addams-wednesday-tv-series-movie-characters-jenna-ortega-emma-myers-hd-wallpaper-394f36bed076a736bd7e274d4e9a7b24.jpg
        " className='img1' alt="" /> */}
      <div className="layerinfo-1">
        <div className="info">
          <img src="https://logos-world.net/wp-content/uploads/2022/12/Logo-Wednesday.png" alt="" />
          <span className="desc">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta, tempora? Quam reprehenderit consequuntur sequi impedit aut. Ea porro esse nesciunt vitae laborum magni explicabo quae soluta officiis beatae, sit ut.
          </span>
          <div className="buttons">
            <button className="play">
              <PlayArrow />
              <span>Play</span>
            </button>
            <button className="more">
              <InfoOutlined />
              <span>Info</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Featured;
