import React, { useState, useEffect, useRef } from 'react';
import './CardCircle.css';
import CardCircleItemsContainer from './CardCircleItemsContainer';

interface CardCircleProps {
    items: number[]
    selectedItem: number
    onItemSelected: (item:number) => void
}

function convertNumberToIcon(num: number): string {
    switch (num) {
        case 1:
            return "π";
        case 2:
            return "π";
        case 3:
            return "π²";
        case 4:
            return "πΈοΈ";
        case 5:
            return "π£";
        case 6:
            return "πββ¬";
        case 7:
            return "βοΈ";
        case 8:
            return "π";
        case 9:
            return "β";
        case 10:
            return "π»";
        case 11:
            return "π";
        case 12:
            return "β―οΈ";
        case 13:
            return "πΌ";
        case 14:
            return "π";
        case 15:
            return "π¨";
        case 16:
            return "π΅";
        case 17:
            return "π";
        case 18:
            return "π‘";
        case 19:
            return "β";
        case 20:
            return "π₯";
        case 21:
            return "βοΈ";
        case 22:
            return "π₯";
        case 23:
            return "πͺ";
        case 24:
            return "π";
        case 25:
            return "π―";
        case 26:
            return "π";
        case 27:
            return "π€‘";
        case 28:
            return "π";
        case 29:
            return "π¦";
        case 30:
            return "π";
        case 31:
            return "π";
        case 32:
            return "π§";
        case 33:
            return "β‘";
        case 34:
            return "π―οΈ";
        case 35:
            return "π";
        case 36:
            return "πΌ";
        case 37:
            return "β";
        case 38:
            return "ποΈ";
        case 39:
            return "π";
        case 40:
            return "π§";
        case 41:
            return "π¨";
        case 42:
            return "βοΈ";
        case 43:
            return "π»";
        case 44:
            return "π¬";
        case 45:
            return "βοΈ";
        case 46:
            return "π¦";
        case 47:
            return "πΉ"; // Dinosaur!!
        case 48:
            return "π";
        case 49:
            return "π"; // Igloo
        case 50:
            return "π";
        case 51:
            return "π";
        case 52:
            return "π·οΈ";
        case 53:
            return "βοΈ";
        case 54:
            return "π’";
        case 55:
            return "π§";
        case 56:
            return "πΆοΈ";
        case 57:
            return "β";
        default:
            throw new RangeError();
    }
}


const CardCircle: React.FC<CardCircleProps> = (props) => {
    const [height, setHeight] = useState(0);
    const [width, setWidth] = useState(0);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setHeight(ref.current!.clientHeight);
        setWidth(ref.current!.clientWidth);
    }, [ref, setHeight, setWidth])

    return <div ref={ref} className='card-circle'>
        <CardCircleItemsContainer selectedItem={props.selectedItem} onItemSelected={props.onItemSelected} items={props.items} deckTheme={convertNumberToIcon} cardHeight={height} cardWidth={width}></CardCircleItemsContainer>
    </div>
}

export default CardCircle;