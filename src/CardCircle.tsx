import React, {useState, useEffect, useRef } from 'react';
import './CardCircle.css';
import CardItemsContainer from './CardItemsContainer';

interface CardCircleProps {
    items: number[]
}

const CardCircle: React.FC<CardCircleProps> = (props) => {
    const [height, setHeight] = useState(0);
    const [width, setWidth] = useState(0);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setHeight(ref.current!.clientHeight);
        setWidth(ref.current!.clientWidth);
    })

    return <div ref={ref} className='card-circle'>
        <CardItemsContainer items={props.items} cardHeight={height} cardWidth={width}></CardItemsContainer>
    </div> 
}

export default CardCircle;