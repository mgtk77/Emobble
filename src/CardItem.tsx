import React from "react"
import "./CardItem.css"

interface CardItemProps {
    itemCode: number,
    itemImage: string
    selected: boolean,
    onClick: (i:number) => void
}

const CardItem: React.FC<CardItemProps> = (props) => {
    var className;
    if (props.selected) {
        className = "card-item card-item-selected"
    } else {
        className = "card-item";
    }

    return <div><button className={className} onClick={() => props.onClick(props.itemCode)}>{props.itemImage}</button></div>
}

export default CardItem;