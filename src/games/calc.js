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

const gamePlay = () => {
  const pairOfNumbers = cons(getRandomNumber(), getRandomNumber());
  const expression = cons(pairOfNumbers, getRandomItem(signsArray));
  const num1 = car(car(expression));
  const num2 = cdr(car(expression));
  const sign = cdr(expression);
  const goal = expectedAnswer(num1, num2, sign);
};


const calcGame = () => {
  sayHello('What is the result of the expression?');
  resolveExpression(`${getUserName()}`);
};

export default calcGame;
