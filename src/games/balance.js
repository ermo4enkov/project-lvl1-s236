import readlineSync from 'readline-sync';
import chalk from 'chalk';
import { checkNumberAnswer, totalSumOfNumbers } from '../utils';
import { getRandomNumber, sayHello } from '..';

const randomNumb = getRandomNumber(11, 9999);
const getSumOfNumbers = num => totalSumOfNumbers(num);


// const getBalancedNumber = (number) => {
//   const summ = getSumOfNumbers(number);
//   console.log(number);
//   console.log(summ);
// };

const findOutBalance = (userName) => {
  console.log(userName);
//   getBalancedNumber(randomNumb);
  console.log(randomNumb);
};

const balanceGame = () => {
  sayHello('Find the greatest common divisor of given numbers.');
  const userName = readlineSync.question(`May I have your ${chalk.hex('#0086b3')('name')}? `);
  console.log(`Hello, ${chalk.hex('#0086b3')(userName)}\n`);
  findOutBalance(userName);
};

export default balanceGame;
