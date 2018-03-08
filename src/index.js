import readlineSync from 'readline-sync';
import chalk from 'chalk';
import { car, cdr } from 'hexlet-pairs';

import { sayHello, checkNumberAnswer } from './utils';

export const getUserName = () => {
  const name = readlineSync.question(`May I have your ${chalk.hex('#0086b3')('name')}? `);
  console.log(`Hello, ${chalk.hex('#0086b3')(name)}\n`);
  return name;
};

const gameInterface = (gameTitle, gamePlay) => {
  sayHello(`${gameTitle}`);
  const userName = getUserName();
  let count = 0;
  while (count < 3) {
    console.log(`Question: ${'smt'}`);
    const answer = readlineSync.question(`${chalk.hex('#d14')('Your')} answer: `).toLowerCase();
    if (checkNumberAnswer(goal, answer)) {
      count += 1;
      console.log(`${chalk.hex('#d14')('Correct!')}`);
    } else {
      console.log(`'${chalk.hex('#990073')(answer)}' is wrong answer ;(. Correct answer was '${chalk.hex('#990073')(goal)}'`);
      console.log(`Let's try again, ${userName}!`);
      return false;
    }
  }
  console.log(`${chalk.hex('#d14')('Congratulations,', userName, '!')}`);
  return true;
};

export default gameInterface;

