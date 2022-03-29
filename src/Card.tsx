import React from "react";
import CardCircle from "./CardCircle";

interface CardProps {
    items: number[]
}

const Card: React.FC<CardProps> = (props) => {
    return <CardCircle items={props.items} />
}

export default Card;