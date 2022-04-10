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
            return "🔓";
        case 2:
            return "🍏";
        case 3:
            return "🌲";
        case 4:
            return "🕸️";
        case 5:
            return "💣";
        case 6:
            return "🐈‍⬛";
        case 7:
            return "☃️";
        case 8:
            return "👋";
        case 9:
            return "⛔";
        case 10:
            return "🌻";
        case 11:
            return "🍀";
        case 12:
            return "☯️";
        case 13:
            return "🍼";
        case 14:
            return "🐉";
        case 15:
            return "🔨";
        case 16:
            return "🌵";
        case 17:
            return "🌞";
        case 18:
            return "💡";
        case 19:
            return "⚓";
        case 20:
            return "🔥";
        case 21:
            return "✂️";
        case 22:
            return "🥕";
        case 23:
            return "🍪";
        case 24:
            return "👄";
        case 25:
            return "🎯";
        case 26:
            return "🐞";
        case 27:
            return "🤡";
        case 28:
            return "🚕";
        case 29:
            return "🐦";
        case 30:
            return "🐕";
        case 31:
            return "🍁";
        case 32:
            return "🧀";
        case 33:
            return "⚡";
        case 34:
            return "🕯️";
        case 35:
            return "👀";
        case 36:
            return "🎼";
        case 37:
            return "❗";
        case 38:
            return "🗝️";
        case 39:
            return "🌜";
        case 40:
            return "💧";
        case 41:
            return "🎨";
        case 42:
            return "♟️";
        case 43:
            return "👻";
        case 44:
            return "🐬";
        case 45:
            return "❄️";
        case 46:
            return "🦓";
        case 47:
            return "👹"; // Dinosaur!!
        case 48:
            return "🕑";
        case 49:
            return "🛖"; // Igloo
        case 50:
            return "💀";
        case 51:
            return "💓";
        case 52:
            return "🕷️";
        case 53:
            return "✏️";
        case 54:
            return "🐢";
        case 55:
            return "🧊";
        case 56:
            return "🕶️";
        case 57:
            return "❓";
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