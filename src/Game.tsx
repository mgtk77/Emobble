import React from 'react';
import Board from './Board';
import { useGameConfigurationReducer } from './GameConfigurationReducer';
import { useGameProgressReducer } from './GameProgressReducer';

function Game() {

    let [gameConfiguration, gameConfigurationDispatcher] = useGameConfigurationReducer()
    let [gameProgress, gameProgressDispatcher] = useGameProgressReducer()

    console.log(gameProgress)

    const totalPairsToFind = gameConfiguration.cardsInGame - 1;
    var allPairsFound = (gameProgress.pairsFound === totalPairsToFind)


    return <div>
        <table style={{ margin: "0 auto 0 auto" }}>
            <tbody>
                <tr><td><h1>Welcome to emobble!</h1></td></tr>
                {/* <tr><td><GameOptions /></td></tr> */}
                <tr>
                    <td>
                        {allPairsFound && <h1>Victory!</h1>}
                        {!allPairsFound && <Board gameConfiguration={gameConfiguration} gameProgressDispatcher={gameProgressDispatcher} />}
                    </td>
                </tr>
                <tr>
                    <td><h3>Pairs found: {gameProgress.pairsFound} / {totalPairsToFind}</h3></td>
                </tr>
            </tbody>
        </table>
    </div>
}

export default Game;