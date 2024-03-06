import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from "@material-ui/icons"
import "./List.scss"
import Listitem from "../listtitem/Listitem"
import { useRef, useState } from "react"

const List = ({list}) => {
    const listRef = useRef()
    const [isMoved, setISMoved] = useState(false);
    const [slideNumber, setSlideNumber] = useState(0);

    const handleClick = (direction) => {
        setISMoved(true)
        const itemWidth = 230; // Adjust this value based on your item width
        const container = listRef.current;
      
        let newSlideNumber;
        if (direction === "left" && slideNumber > 0) {
          newSlideNumber = slideNumber - 1;
        } else if (direction === "right" && slideNumber < 5) {
          newSlideNumber = slideNumber + 1;
        } else {
          return; // Do nothing if attempting to go beyond bounds
        }
      
        setSlideNumber(newSlideNumber);
        const newPosition = -itemWidth * newSlideNumber;
        container.style.transform = `translateX(${newPosition}px)`;
      };
      
  return (
    <div className="list">
        <spna className="listTitle">{list.title}</spna>
        <div className="wrapper">
            <ArrowBackIosOutlined className="sliderArrow left" onClick={() => handleClick("left")}
                style={{display: !isMoved && "none"}}
            />
            <div className="container" ref={listRef}>
              {list.content.map((item, i) => (
                <Listitem key={i} index={i} item={item} />
              ))}
            </div>

            <ArrowForwardIosOutlined className="sliderArrow right" onClick={() => handleClick("right")}/>
        </div>
    </div> 
  )
}

export default List