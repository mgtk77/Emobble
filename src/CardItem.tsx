import React from "react"
import "./CardItem.css"

interface CardItemProps {
    item: number,
    selected: boolean,
    onClick: (i:number) => void
}

function convertNumberToIcon(num: number) {
    switch(num) {
        case 1:
            return "😊";
        case 2:
            return "🎁";
        case 3:
            return "😘";
        case 4:
            return "😎";
        case 5:
            return "😵‍💫";
        case 6:
            return "🤩";
        case 7:
            return "🐈";
        case 8:
            return "🐊";
        case 9:
            return "☔";
        case 10:
            return "👧";
        case 11:
            return "🪴";
        case 12:     
            return "🪑";
        case 13:
            return "🎸";
        case 14:
            return "🐻";
        case 15:
            return "🚀";
        case 16:
            return "🦞";
        default:
            throw new RangeError();
    }
}

const CardItem: React.FC<CardItemProps> = (props) => {
    let [selected, setSelected] = React.useState(false);
    let onClick = React.useCallback(() =>{
        setSelected(!selected)
        props.onClick(17);
    }, [selected, setSelected]);
    
    var className;
    if (selected) {
        className = "card-item card-item-selected"
    } else {
        className = "card-item";
    }

    return <button className={className} onClick={onClick}>{convertNumberToIcon(props.item)}</button>
}

export default CardItem;