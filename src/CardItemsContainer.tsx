import React from 'react'

interface CardItemsContainerProps {
    items: number[],
    cardHeight: number,
    cardWidth: number,
}

// function that returns a random number between a min and max
function getRandomNumber(min: number, max: number) {
    return Math.random() * (max - min) + min;
}

const CardItemsContainer: React.FC<CardItemsContainerProps> = (props) => {
    let heightMaxValue = (props.cardHeight / 2) * 50 / 100
    let heightMinValue = heightMaxValue * -1

    let widthMinValue = 0 + props.cardWidth * 1/4
    let widthMaxValue = props.cardWidth - widthMinValue;
    
    // Ranges!
    // Left: 50-300
    // top: -80 - 80 

    // TODO: solve items on top of each other

    let itemDivs = props.items.map((item: number) => {
        let heightPosition = getRandomNumber(heightMinValue, heightMaxValue);
        let widthPosition = getRandomNumber(widthMinValue, widthMaxValue);
            
        return <div style={{top: heightPosition, left: widthPosition, position: 'relative'}}>{item}</div>
    });

    return <div>
        {itemDivs}
    </div>
}

export default CardItemsContainer;