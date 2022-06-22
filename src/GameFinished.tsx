import React, { Dispatch } from "react";


interface GameFinishedProps {
    gameConfiguration: number
    gameProgressDispatcher: string
}

const GameFinished: React.FC<GameFinishedProps> = (props) => {
    return <div>{props.gameConfiguration}</div>
}

export default GameFinished