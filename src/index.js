import readlineSync from 'readline-sync';
import chalk from 'chalk';
import { car, cdr } from 'hexlet-pairs';

export const getUserName = () => {
  const name = readlineSync.question(`May I have your ${chalk.hex('#0086b3')('name')}? `);
  console.log(`Hello, ${chalk.hex('#0086b3')(name)}\n`);
  return name;
};


// export const startGame = (rules, game) => {
//   let count = 0;
//   while (count < 3) {

//   }

// }
