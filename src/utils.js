import readlineSync from 'readline-sync';
import chalk from 'chalk';

export const getRandomNumber = (min = 1, max = 100) =>
  Math.floor(Math.random() * ((max - min) + 1)) + min;

export const sayHello = rules => console.log(`Welcome to the Brain Games!\n${rules}\n`);

export const getRandomItem = arr => arr[Math.floor(Math.random() * arr.length)];

export const checkNumberAnswer = (goal, answer) => Number(goal) === Number(answer);
