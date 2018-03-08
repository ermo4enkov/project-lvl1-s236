import readlineSync from 'readline-sync';
import { cons, car, cdr } from 'hexlet-pairs';
import chalk from 'chalk';
import { getUserName } from '..';
import { getRandomItem, getRandomNumber, sayHello, checkNumberAnswer } from '../utils';

const signsArray = ['+', '-', '*'];

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

const resolveExpression = (name) => {
  let count = 0;
  while (count < 3) {
    const pairOfNumbers = cons(getRandomNumber(), getRandomNumber());
    const expression = cons(pairOfNumbers, getRandomItem(signsArray));
    const num1 = car(car(expression));
    const num2 = cdr(car(expression));
    const sign = cdr(expression);
    const goal = expectedAnswer(num1, num2, sign);
    console.log(`Question: ${num1}${sign}${num2}`);
    const answer = readlineSync.question(`${chalk.hex('#d14')('Your')} answer: `).toLowerCase();
    if (checkNumberAnswer(goal, answer)) {
      count += 1;
      console.log(`${chalk.hex('#d14')('Correct!')}`);
    } else {
      console.log(`'${chalk.hex('#990073')(answer)}' is wrong answer ;(. Correct answer was '${chalk.hex('#990073')(goal)}'`);
      console.log(`Let's try again, ${name}!`);
      return false;
    }
  }

  console.log(`${chalk.hex('#d14')('Congratulations,', name, '!')}`);
  return true;
};


const calcGame = () => {
  sayHello('What is the result of the expression?');
  resolveExpression(`${getUserName()}`);
};

export default calcGame;
