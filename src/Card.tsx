import React from "react";
import CardCircle from "./CardCircle";

interface CardProps {
    items: number[]
    selectedItem: number
    onItemSelected: (item:number) => void
}

const Card: React.FC<CardProps> = (props) => {
    return <CardCircle selectedItem={props.selectedItem} items={props.items} onItemSelected={props.onItemSelected} />
}

export default Card;