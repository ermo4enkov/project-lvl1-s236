import readlineSync from 'readline-sync';
import chalk from 'chalk';
import { getRandomItem, getRandomNumber, sayHello } from '../index';

const signsArray = ['+', '-', '*'];
const randomSign = arr => getRandomItem(arr);
const randomNumb = (a, b) => getRandomNumber(a, b);
const greetings = subtitle => sayHello(subtitle);

const resolveExpression = (userName) => {
  console.log(randomNumb());
  console.log(randomSign(signsArray));
  console.log(userName);
//   console.log(randomItem(signsArray));
//   console.log(getRandomNumber.getRandomNumber());
};


const calcGame = () => {
  greetings('What is the result of the expression?');
  const userName = readlineSync.question(`May I have your ${chalk.hex('#0086b3')('name')}? `);
  console.log(`Hello, ${chalk.hex('#0086b3')(userName)}\n`);
  resolveExpression(userName);
};

export default calcGame;
