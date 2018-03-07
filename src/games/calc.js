import readlineSync from 'readline-sync';
import { cons, car, cdr } from 'hexlet-pairs';
import chalk from 'chalk';
import { getRandomItem, getRandomNumber, sayHello } from '../utils';

const signsArray = ['+', '-', '*'];
const randomSign = arr => getRandomItem(arr);
const randomNumb = (a, b) => getRandomNumber(a, b);
const greetings = subtitle => sayHello(subtitle);

const expectedAnswer = (num1, num2, sign) => {
  switch (String(sign)) {
    case '+':
      return Number(num1) + Number(num2);
    case '-':
      return Number(num1) - Number(num2);
    case '*':
      return Number(num1) * Number(num2);
    default:
      return false;
  }
};

const resolveExpression = (userName) => {
  const pairOfNumbers = cons(randomNumb(), randomNumb());
  const expression = cons(pairOfNumbers, randomSign(signsArray));
  const num1 = car(car(expression));
  const num2 = cdr(car(expression));
  const sign = cdr(expression);
  expectedAnswer(num1, num2, sign);

  // const expression = (num1 = number1, num2 = number2) => cons(num1, num2);
  // const sig = expression();

  // console.log(sig);
  

  const number = getRandomNumber();
  console.log(`Question: ${number}`);
  const answer = readlineSync.question(`${chalk.hex('#d14')('Your')} answer: `).toLowerCase();
};


const calcGame = () => {
  greetings('What is the result of the expression?');
  const userName = readlineSync.question(`May I have your ${chalk.hex('#0086b3')('name')}? `);
  console.log(`Hello, ${chalk.hex('#0086b3')(userName)}\n`);
  resolveExpression(userName);
};

export default calcGame;
