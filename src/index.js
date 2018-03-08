import chalk from 'chalk';
import readlineSync from 'readline-sync';

import { sayHello, startGame } from './utils';

export const getUserName = () => {
  const name = readlineSync.question(`May I have your ${chalk.hex('#0086b3')('name')}? `);
  console.log(`Hello, ${chalk.hex('#0086b3')(name)}\n`);
  return name;
};

const gameInterface = (gameTitle, gamePlay) => {
  sayHello(`${gameTitle}`);
  const userName = getUserName();
  startGame(gameTitle, gamePlay, userName);
};

export default gameInterface;
