import chalk from 'chalk';
import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

export const getRandomNumber = (min = 1, max = 100) =>
  Math.floor(Math.random() * ((max - min) + 1)) + min;

export const sayHello = rules => console.log(`Welcome to the Brain Games!\n${rules}\n`);

export const getRandomItem = arr => arr[Math.floor(Math.random() * arr.length)];

export const checkAnswer = (goal, answer) => goal === answer;


export const startGame = (gameTitle, gamePlay, userName) => {
  let count = 0;
  while (count < 3) {
    const game = gamePlay(car, cdr);
    const gameGoal = String(cdr(game));
    const gameQuestion = car(game);
    console.log(`Question: ${gameQuestion}`);
    const answer = readlineSync.question(`${chalk.hex('#d14')('Your')} answer: `).toLowerCase();
    if (checkAnswer(gameGoal, answer)) {
      count += 1;
      console.log(`${chalk.hex('#d14')('Correct!')}`);
    } else {
      console.log(`'${chalk.hex('#990073')(answer)}' is wrong answer ;(. Correct answer was '${chalk.hex('#990073')(gameGoal)}'`);
      console.log(`Let's try again, ${userName}!`);
      return false;
    }
  }
  console.log(`${chalk.hex('#d14')('Congratulations,', userName, '!')}`);
  return true;
};
