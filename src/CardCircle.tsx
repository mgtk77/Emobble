import React, {useState, useEffect, useRef } from 'react';
import './CardCircle.css';
import CardCircleItemsContainer from './CardCircleItemsContainer';

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
        <CardCircleItemsContainer items={props.items} cardHeight={height} cardWidth={width}></CardCircleItemsContainer>
    </div> 
}

export default CardCircle;