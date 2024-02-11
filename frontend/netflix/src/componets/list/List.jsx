import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from "@material-ui/icons"
import "./List.scss"
import Listitem from "../listtitem/Listitem"
import { useRef, useState } from "react"

const List = () => {
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
        <spna className="listTitle">Continue to watch</spna>
        <div className="wrapper">
            <ArrowBackIosOutlined className="sliderArrow left" onClick={() => handleClick("left")}
                style={{display: !isMoved && "none"}}
            />
            <div className="container" ref={listRef}>
                <Listitem index={0}/>
                <Listitem index={1}/>
                <Listitem index={2}/>
                <Listitem index={3}/>
                <Listitem index={4}/>
                <Listitem index={5}/>
                <Listitem index={6}/>
                <Listitem index={7}/>
                <Listitem index={8}/>
                <Listitem index={9}/>
            </div>
            <ArrowForwardIosOutlined className="sliderArrow right" onClick={() => handleClick("right")}/>
        </div>
    </div> 
  )
}

export default List