import React, {useState, useEffect, useRef } from 'react';
import './CardCircle.css';

interface CardCircleProps {
    items: number[]
}

// function that returns a random number between a min and max
function getRandomNumber(min: number, max: number) {
    return Math.random() * (max - min) + min;
}

const CardCircle: React.FC<CardCircleProps> = (props) => {
    const [height, setHeight] = useState(0);
    const [width, setWidth] = useState(0);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setHeight(ref.current!.clientHeight);
        setWidth(ref.current!.clientWidth);
    })

    let itemDivs = props.items.map((item: number) => {
        let heightPosition = getRandomNumber(-80, 80);
        let widthPosition = getRandomNumber(50, 300);
        console.log(heightPosition, widthPosition);
        let style = {
            top: heightPosition,
            left: widthPosition,
            position: 'relative',
        }
        return <div style={{top: heightPosition, left: widthPosition, position: 'relative'}}>{item}</div>
    });
    // Ranges!
    // Left: 50-300
    // top: -80 - 80 

    return <div ref={ref} className='card-circle'>
        {/* {simpleItem} */}
        {/* {props.items} */}
        {itemDivs}
        {/* <h3>Width: {width}</h3> */}
        {/* <h3>Height: {height}</h3> */}
    </div> 
}



export default CardCircle;