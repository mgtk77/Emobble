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
            return 6;
        case 7:
            return 7;
        case 8:
            return 8;
        case 9:
            return 9;
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