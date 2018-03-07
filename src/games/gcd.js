import readlineSync from 'readline-sync';
import chalk from 'chalk';
import { getRandomNumber, sayHello, checkNumberAnswer } from '../utils';

const randomNumb = () => getRandomNumber();
const greetings = subtitle => sayHello(subtitle);

const expectedAnswer = (num1, num2) => {
  if (!num2) {
    return num1;
  }
  return expectedAnswer(num2, num1 % num2);
};

const checkAnswer = (goal, answer) => checkNumberAnswer(goal, answer);

const findOutGCD = (userName) => {
  let count = 0;
  while (count < 3) {
    const num1 = randomNumb();
    const num2 = randomNumb();
    const goal = expectedAnswer(num1, num2);
    console.log(`Question: ${num1} ${num2}`);
    const answer = readlineSync.question(`${chalk.hex('#d14')('Your')} answer: `).toLowerCase();
    if (checkAnswer(goal, answer)) {
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


const gcdGame = () => {
  greetings('Find the greatest common divisor of given numbers.');
  const userName = readlineSync.question(`May I have your ${chalk.hex('#0086b3')('name')}? `);
  console.log(`Hello, ${chalk.hex('#0086b3')(userName)}\n`);
  findOutGCD(userName);
};

export default gcdGame;
