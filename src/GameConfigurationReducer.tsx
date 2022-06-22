import React from "react";
import { GameConfiguration, PossibleNumberOfCardsInGame } from "./GameConfiguration";

const initialConfiguration: GameConfiguration = {
  cardsInGame: 54,
};

type GameConfigurationAction =
  | { type: "setNumberOfCardsInGame", value: PossibleNumberOfCardsInGame }
  | { type: "setCardsInGame2", value: number }


// TODO: make const number of caards
export const buildSetCardsInGameAction = (numberOfCards: PossibleNumberOfCardsInGame) => {
  return { type: "setCardsInGame", value: numberOfCards }
}

const reducer = (currentConfiguration: GameConfiguration, action: GameConfigurationAction) => {
  switch (action.type) {
    case 'setNumberOfCardsInGame':
      currentConfiguration.cardsInGame = action.value
      return currentConfiguration
    // case 'reset':
    // return initialConfiguration;
    // case 'addTest':
    // return {test: state.test + 1};
    // case 'removeTest':
    // return {test: state.test - 1};
  }
  // TODO: make this a new error for missing action
  throw new RangeError();
};

export const useGameConfigurationReducer = () => {
  return React.useReducer(reducer, initialConfiguration);
};