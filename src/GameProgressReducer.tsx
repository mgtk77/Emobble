import React from "react";

export interface GameProgress {
  pairsFound: number
}

const gameStartProgressValue: GameProgress = {
  pairsFound: 0,
};

export type GameProgressAction =
  | { type: "pairFound" }
  

const reducer = (currentGameProgress: GameProgress, action: GameProgressAction) => {
  switch (action.type) {
    case "pairFound":
      currentGameProgress.pairsFound += 1
      return { pairsFound: currentGameProgress.pairsFound } 
  }
};

export const useGameProgressReducer = () => {
  return React.useReducer(reducer, gameStartProgressValue);
};