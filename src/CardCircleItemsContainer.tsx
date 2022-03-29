import React from 'react'
import CardItem from './CardItem';
import './CardCircleItemsContainer.css'

interface CardItemsContainerProps {
    items: number[],
    cardHeight: number,
    cardWidth: number,
}

// function that returns a random number between a min and max
function getRandomNumber(min: number, max: number) {
    return Math.random() * (max - min) + min;
}

const itemsPerCard = 8

const combinations = [
    // [1, 1, 6],
    // [1, 2, 5],
    // [1, 3, 4],
    [2, 2, 4],
    [2, 3, 3],
]

function shuffleArray(array: number[]) {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}

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

const CardCircleItemsContainer: React.FC<CardItemsContainerProps> = (props) => {
    let chosenCardComibnation = Math.floor(Math.random() * combinations.length)
    console.log(chosenCardComibnation)
    let chosenCombination = combinations[chosenCardComibnation]
    let chosenCombinationCopied = Object.assign([], chosenCombination);
    shuffleArray(chosenCombinationCopied);
    let copiedItems = Object.assign([], props.items);
    shuffleArray(copiedItems);
    var currentStartItem = 0;
    let trs = chosenCombinationCopied.map((itemsInLine: number, lineNumber) => {
        console.log("line number", lineNumber);
        console.log("itemsInLine", itemsInLine);
        let lineTds = range(0, itemsInLine, 1).map((itemNumber) => {
            return <td><CardItem item={copiedItems[currentStartItem + itemNumber]} selected={false} onClick={(i)=>{}}></CardItem></td>
        });
        currentStartItem = currentStartItem + itemsInLine;
        return <tr>
            {lineTds}
        </tr>
    });


    return <table className='card-circle-items-container'>
        {trs}
    </table>
}

const CardCircleItemsContainer2: React.FC<CardItemsContainerProps> = (props) => {
    let heightMaxValue = (props.cardHeight / 2) * 45 / 100
    let heightMinValue = heightMaxValue * -1

    let widthMinValue = 0 + props.cardWidth * 1 / 4
    let widthMaxValue = props.cardWidth - widthMinValue;

    // TODO: solve items on top of each other

    let itemDivs = props.items.map((item: number) => {
        let heightPosition = getRandomNumber(heightMinValue, heightMaxValue);
        let widthPosition = getRandomNumber(widthMinValue, widthMaxValue);

        return <div style={{ top: heightPosition, left: widthPosition, position: 'relative' }}>
            <CardItem item={item} selected={false} onClick={(i) => { }}></CardItem>
        </div>
    });

    return <div>
        {itemDivs}
    </div>
}

export default CardCircleItemsContainer;