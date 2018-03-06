import readlineSync from 'readline-sync';
import chalk from 'chalk';

const greetings = 'Welcome to the Brain Games!\nWhat is the result of the expression?';
const signsArray = ['+', '-', '*'];
const randomItem = arr => arr[Math.floor(Math.random() * arr.length)];

const resolveExpression = (userName) => {
  console.log(randomItem(signsArray));
};


const calcGame = () => {
  console.log(`${greetings}`);
  const userName = readlineSync.question(`May I have your ${chalk.hex('#0086b3')('name')}? `);
  console.log(`Hello, ${chalk.hex('#0086b3')(userName)}\n`);
  resolveExpression(userName);
};

export default calcGame;
