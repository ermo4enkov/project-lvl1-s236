import readlineSync from 'readline-sync';
import chalk from 'chalk';
import { getRandomNumber, sayHello } from '../utils';

const randomNumb = () => getRandomNumber();
const isNumberEven = number => number % 2 === 0;
const checkAnswer = (answer, number) => (isNumberEven(number) && answer === 'yes') || (!isNumberEven(number) && answer === 'no');
const switchAnswer = (number => (isNumberEven(number) ? 'yes' : 'no'));
const greetings = subtitle => sayHello(subtitle);

const findOutNumber = (userName) => {
  let count = 0;
  while (count < 3) {
    const number = randomNumb();
    console.log(`Question: ${number}`);
    const answer = readlineSync.question(`${chalk.hex('#d14')('Your')} answer: `).toLowerCase();
    if (checkAnswer(answer, number)) {
      count += 1;
      console.log(`${chalk.hex('#d14')('Correct!')}`);
    } else {
      console.log(`'${chalk.hex('#990073')(answer)}' is wrong answer ;(. Correct answer was '${chalk.hex('#990073')(switchAnswer(number))}'`);
      console.log(`Let's try again, ${userName}!`);
      return false;
    }
  }

  console.log(`${chalk.hex('#d14')('Congratulations,', userName, '!')}`);
  return true;
};

const evenOrNoGame = () => {
  greetings(`Answer ${chalk.hex('#d14')('"yes"')} if ${chalk.hex('#0086b3')('number')} even otherwise answer ${chalk.hex('#d14')('"no"')}.\n`);
  const userName = readlineSync.question(`May I have your ${chalk.hex('#0086b3')('name')}? `);
  console.log(`Hello, ${chalk.hex('#0086b3')(userName)}\n`);
  findOutNumber(userName);
};

export default evenOrNoGame;
