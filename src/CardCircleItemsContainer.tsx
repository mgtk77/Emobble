import React from 'react'
import CardItem from './CardItem';
import './CardCircleItemsContainer.css'
import { shuffleArray } from './Utils';

interface CardCircleItemsContainerProps {
    items: number[]
    deckTheme: (itemCode: number) => string
    cardHeight: number
    cardWidth: number
    selectedItem: number
    onItemSelected: (item:number) => void
}

const combinations = [
    // [1, 1, 6],
    // [1, 2, 5],
    // [1, 3, 4],
    // [2, 2, 4],
    [2, 3, 3],
]



function range(start: number, stop: number, step: number) {
    if (typeof stop == 'undefined') {
        // one param defined
        stop = start;
        start = 0;
    }

    if (typeof step == 'undefined') {
        step = 1;
    }

    if ((step > 0 && start >= stop) || (step < 0 && start <= stop)) {
        return [];
    }

    var result = [];
    for (var i = start; step > 0 ? i < stop : i > stop; i += step) {
        result.push(i);
    }

    return result;
};

const CardCircleItemsContainer: React.FC<CardCircleItemsContainerProps> = (props) => {
    // let chosenCardComibnation = Math.floor(Math.random() * combinations.length)
    
    // let [chosenCombination, _] = React.useState(shuffleArray(combinations[chosenCardComibnation]));
    let chosenCombination = [2, 3, 3];

    var currentStartItem = 0;
    let trs = chosenCombination.map((itemsInLine: number, lineNumber) => {
        let lineTds = range(0, itemsInLine, 1).map((itemNumber) => {
            let itemCode = props.items[currentStartItem + itemNumber]
            return <td key={itemCode}><CardItem itemCode={itemCode} itemImage={props.deckTheme(itemCode)} selected={itemCode === props.selectedItem} onClick={props.onItemSelected}></CardItem></td>
        });
        currentStartItem = currentStartItem + itemsInLine;
        return <tr key={lineNumber}>
            {lineTds}
        </tr>
    });


    return <table className='card-circle-items-container'>
        <tbody>
        {trs}
        </tbody>
    </table>
}

export default CardCircleItemsContainer;