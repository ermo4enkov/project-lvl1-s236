import readlineSync from 'readline-sync';
import chalk from 'chalk';

const greetings = 'Welcome to the Brain Games!\nWhat is the result of the expression?';

const calcGame = () => {
  const userName = readlineSync.question(`May I have your ${chalk.hex('#0086b3')('name')}? `);
  console.log(`Hello, ${chalk.hex('#0086b3')(userName)}\n`);
};

export default calcGame;
