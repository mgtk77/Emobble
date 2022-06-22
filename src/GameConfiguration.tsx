import { gameCardsCount } from "./CardOptions";

export type PossibleNumberOfCardsInGame = 2 | 5 | 10 | 25 | typeof gameCardsCount;

export type GameConfiguration = {
  cardsInGame: PossibleNumberOfCardsInGame;
};
