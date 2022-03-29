import React from "react";
import Card from "./Card";

function Board() {
    return <table>
        <tr>
            <td>
                <Card></Card>
            </td>
            <td><Card></Card></td>
        </tr>
    </table>
}

export default Board;