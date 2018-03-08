import readlineSync from 'readline-sync';
import chalk from 'chalk';
import { car, cdr } from 'hexlet-pairs';

import sayHello from './utils';

export const getUserName = () => {
  const name = readlineSync.question(`May I have your ${chalk.hex('#0086b3')('name')}? `);
  console.log(`Hello, ${chalk.hex('#0086b3')(name)}\n`);
  return name;
};

const gameInterface = (gameRules, gamePlay) => {
  // console.log(`Welcome to the Brain Games!\n${gameRules}\n`);
  sayHello(`${gameRules}`);
  const userName = getUserName();
  // console.log(`Hello, ${userName}!\n`);
  
  for (let i = 0; i < 3; i += 1) {
    const pair = gamePlay(car, cdr);
    const userAnswer = readlineSync.question(`Question: ${car(pair)}\nYour answer: `);
    if (userAnswer === cdr(pair)) {
      console.log('Correct!\n');
    } else {
      console.log('Wrong!\n');
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default gameInterface;
