import readlineSync from 'readline-sync';
import chalk from 'chalk';
import { getRandomNumber, sayHello, checkNumberAnswer } from '../utils';

const randomNumb = () => getRandomNumber();
const greetings = subtitle => sayHello(subtitle);
const getBalancedNumber = number => console.log(String(number).length);

const findOutBalance = (userName) => {
  console.log(userName);
  getBalancedNumber(215);
};

const getbalance = (length) => {
  const startedNum = [];
  for (let i = 0; i < length; i += 1) {
    startedNum.push(0);
  }
  startedNum[startedNum.length - 1] = 1;
  return startedNum.join;
};












const balanceGame = () => {
  greetings('Find the greatest common divisor of given numbers.');
  const userName = readlineSync.question(`May I have your ${chalk.hex('#0086b3')('name')}? `);
  console.log(`Hello, ${chalk.hex('#0086b3')(userName)}\n`);
  findOutBalance(userName);
};

export default balanceGame;
