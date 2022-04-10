import React from 'react';
import Board from './Board';

function Game() {
    return <div>
        <table style={{ margin: "0 auto 0 auto" }}>
            <tbody>
            <tr><td><h1>Welcome to emobble!</h1></td></tr>
            <tr><td><Board /></td></tr>
            </tbody>
        </table>
    </div>
}

export default Game;