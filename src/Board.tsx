import React, { Dispatch } from "react";
import Card from "./Card";
import { cards } from "./CardOptions";
import { GameConfiguration } from "./GameConfiguration";
import { shuffleArray } from './Utils';

import { GameProgressAction } from "./GameProgressReducer"

/* 
1 - lock
2 - apple
3 - tree
4 - spider web
5 - bomb
6 - cat
7 - snowman
8 - dobble hand
9 - no entrance
10 - flower
11 - clover
12 - yin yang
13 - baby bottle
14 - dragon
15 - hammer
16 - cactus
17 - sun
18 - light bulb
19 - anchor
20 - fire
21 - scissors
22 - carrot
23 - gingerman
24 - lips
25 - bulls-eye
26 - beetle

27 - clown
28 - car
29 - bird
30 - dog
31 - maple

32 - cheese
33 - lightning 
34 - candle
35 - flower
36 - eye

37 - music key
38 - exclamation mark
39 - key

40 - moon
41 - water drop
42 - paint

hammer, dragon, yin-yang, clover, flower, no-enterance, baby bottle, apple
15, 14

sun, bulb, tree, anchor, dragon, fire, scissors, cacatus

baby bottle, lips, bullseye, scissors, ladybug, carrot, cat, gingerbread

cat, clown, taxi, bird, clover, dog, sun, maple


lightning, scissors, cheese, flower, eye, bird, candle, bomb

key, lock, lips, anchor, sol key note, flower, exclamation mar, taxi

no enterance, zebra, knight, candle, dolphin, cactus, cat, exclamation

drop, ghost, knight, sol key note, heart, snowman, scissors, clover

clock, light bulb, turtle, spider, flower, cat, heart, paint

spider, skull, question mark, baby bottle, key, tree, knight, bird

glasses, knight, sun, apple, lips, ice, eye, paint

dinossaur, sol key, dragon, cat, moon, skull, sun glasses, cheese

no enterance, anchor, clown, lightning, spider, snowman, glasses, bullseye

ice, anchor, bomb, moon, heart, dog, zebra, baby bottle,

snowflake, dinosaur, lightbub, bomb, yinyang,bullseye, knight, taxi

moon, clock, gingerman, eye, ghost, taxi, tree, no enterance

moon, snowman, key, carrot, yintang, turtle, candle, sun

apple, lightning, pencil, caarrot, skull, cactus, heart, taxi

no enterance, sol key, lightbulb, igloo, ice, bird, dobble, carrot

dog, bullseye, apple, sol key, candle, clock, fire, question mark

taxi, baby bottle, igloo, snowman, dolphin, fire, paint, cheese

skull, flower, zebra, bullseye, ghost, sun, igloo, spiderweb

lock, clown, skull, clock, yinyang, ice, dolphin, scissors

sol key, ladybug, maple, lightning, yinyang, paint, tree, zebra

scissors, spider, maple, exlamcation, apple, snowflake, igloo, moon

turtle, lightning, knight, ginger, dog, dragon, igloo, lock

sun, waterdrop, clock, dobble, exclmation, lightning, dinosaur, babybottle

babybottle, candle, lightbulb, maple, ghost, lock, pencil, sunglasses

carrot, spider, fire, maple, eye, zebra, lock, dinosaur

cactus, dog, ghost, lips, dobble, cheese, spider, yintang

bomb, turtle, fire, maple, no enterance, lips, waterdrop, skull

question mark, heart, no enterance, snowflake, sun, cheese, ladybug, lock

cheese, lightbulb, clown, waterdrop, key, zebra, apple, gingerman

dolphin, question mark, web, lips, clover, lightbulb, lightning, moon

snowflake, snowman, dragon, clock, pencil, bird, zebra, lips

flower, dolphin, sunglasses, tree, dog, waterdrop, snowflake, carrot

sol key, snowflake, spiderweb, babybottle, turtle, eye, clown, cactus

sunglasses, cactus, key, bomb, clock, clover, ladybug, igloo

cheese, carrot, knight, web, clock, anchor, maple, hammer

fire, ladybug, moon, clown, flower, pencil, knight, dobble

cat, fire, hammer, ghost, key, snowflake, ice, lightning

candle, spiderweb, waterdrop, taxi, spider,  dragon, ice cube, ladybug

lips, candle, tree, heart, dinosaur, igloo, hammer, clown

bird, dolphin, apple, ghost, dinosaur, ladybug, turtle, anchor

sunglasses, exclmation, bird, heart, web, fire, ginger, yinyang

igloo, waterdrop, anchor, yinyang, cat, eye, question, pencil

key, heart, dobble, bullseye, maple, dragon, dolphin, eye

ice cube, clover, cheese, turtle, exclmation, tree, bullseye, pencil

anchor, candle, snowflake, clover, skull, ginger, paint, dobble

taxi, dobble, sunglasses, zebra, turtle, hammer, scissors, question mark

question mark, exclmation mark, clown, ghost, bomb, paint, carrot, dragon

sol key, bomb, spider, hammer, dolphin, ginger, sun, pencil

no enterance, key, dog, pencil, web, paint, scissors, dinosaur


hammer, moon, lock, water, cactus, bird, bullseye, paint
15, 40, 1, 41, 16, 29, 25, 42

tree, apple, lock, spiderweb, bomb, cat, snowman, dobble
3, 2, 1, 4, 5, 6, 7, 8

*/

interface BoardProps {
    gameConfiguration: GameConfiguration
    gameProgressDispatcher: Dispatch<GameProgressAction>
}

const Board: React.FC<BoardProps> = (props) => {
    let [selectedLeft, setSelectedLeft] = React.useState(-1);
    let [selectedRight, setSelectedRight] = React.useState(-1);

    let [leftCardIndex, setLeftCardIndex] = React.useState(1);
    let [rightCardIndex, setRightCardIndex] = React.useState(0);

    let usedCards = cards.slice(0, props.gameConfiguration.cardsInGame);
    let [innerCards, _] = React.useState(shuffleArray(usedCards));
    console.log("Cards", innerCards[leftCardIndex], innerCards[rightCardIndex]);

    let afterSelectionChange = React.useCallback((leftItem: number, rightItem: number) => {
        if (leftItem > 0 && leftItem === rightItem) {
            // Clear selection
            setSelectedLeft(-1)
            setSelectedRight(-1)

            props.gameProgressDispatcher({ type: "pairFound" })

            // Advance cards
            // TODO: check if we won
            if (leftCardIndex + 1 === innerCards.length) {
                // We won!
                // alert("we won!")
            } else {
                setRightCardIndex(leftCardIndex)
                setLeftCardIndex(leftCardIndex + 1)
                // props.onPairFound()
            }
            }
    }, [leftCardIndex])

    let setSelectedLeftWithClear = React.useCallback((item: number) => {
        if (selectedLeft === item) {
            setSelectedLeft(-1);
            afterSelectionChange(-1, selectedRight)
        } else {
            setSelectedLeft(item)
            afterSelectionChange(item, selectedRight)
        }
    }, [selectedLeft, selectedRight, setSelectedLeft])

    let setSelectedRightWithClear = React.useCallback((item: number) => {
        if (selectedRight === item) {
            setSelectedRight(-1);
            afterSelectionChange(selectedLeft, -1)
        } else {
            setSelectedRight(item)
            afterSelectionChange(selectedLeft, item)
        }

    }, [selectedRight, selectedLeft, setSelectedRight])

    //  TODO: shuffle the displayed card ? If yes, needs to keep the shuffled list in a state.
    //let [shuffledItems, __] = React.useState(shuffleArray(props.items));

    return <table>
        <tbody>
            <tr>
                <td>
                    <Card selectedItem={selectedLeft} onItemSelected={(item: number) => setSelectedLeftWithClear(item)} items={innerCards[leftCardIndex]}></Card>
                </td>
                <td><Card selectedItem={selectedRight} onItemSelected={(item: number) => setSelectedRightWithClear(item)} items={innerCards[rightCardIndex]}></Card></td>
            </tr>
        </tbody>
    </table>
}

export default Board;