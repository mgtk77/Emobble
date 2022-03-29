import React from "react";
import Card from "./Card";

function Board() {
    return <table>
        <tr>
            <td>
                <Card items={[1,2,3,4,5,6,7,8]}></Card>
            </td>
            <td><Card items={[8, 9, 10, 11, 12, 13, 14, 15]}></Card></td>
        </tr>
    </table>
}

export default Board;