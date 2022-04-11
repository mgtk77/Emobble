import React from 'react';
import Board from './Board';

function Game() {
    let [pairsFound, setPairsFound] = React.useState(0);
    let increasePairsFound = () => {
        setPairsFound(pairsFound + 1)
    }

    return <div>
        <table style={{ margin: "0 auto 0 auto" }}>
            <tbody>
                <tr><td><h1>Welcome to emobble!</h1></td></tr>
                <tr><td><Board onPairFound={increasePairsFound} /></td></tr>
                <tr>
                    <td><h3>Pairs found: {pairsFound}</h3></td>
                </tr>
                <tr></tr>
                <tr></tr>
            </tbody>
        </table>
    </div>
}

export default Game;