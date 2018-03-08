import { sayHello, startGame } from './utils';

const gameInterface = (gameTitle, gamePlay) => {
  sayHello(`${gameTitle}`);
  startGame(gameTitle, gamePlay);
};

export default gameInterface;
