import readlineSync from 'readline-sync';
import chalk from 'chalk';
import { getRandomNumber, sayHello, checkNumberAnswer } from '../utils';

const randomNumb = () => getRandomNumber();
const greetings = subtitle => sayHello(subtitle);
const addNumbers = function (sum, current) {
  return Number(sum) + Number(current);
};
const totalSumOfNumbers = arr => arr.reduce(addNumbers, 0);

const getSummOfNumbers = (number) => {
  const num = String(number);
  const numbersArray = num.split('');
  return totalSumOfNumbers(numbersArray);
};

const getBalancedNumber = (number) => {
  const summ = getSummOfNumbers(number);
  console.log(summ);
};

const findOutBalance = (userName) => {
  console.log(userName);
  getBalancedNumber(215);
};

const balanceGame = () => {
  greetings('Find the greatest common divisor of given numbers.');
  const userName = readlineSync.question(`May I have your ${chalk.hex('#0086b3')('name')}? `);
  console.log(`Hello, ${chalk.hex('#0086b3')(userName)}\n`);
  findOutBalance(userName);
};

export default balanceGame;
