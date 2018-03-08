import { cons } from 'hexlet-pairs';
import gameInterface from '..';
import { getRandomNumber } from '../utils';

const gameTitle = 'Find the greatest common divisor of given numbers.';

const expectedAnswer = (num1, num2) => {
  if (!num2) {
    return num1;
  }
  return expectedAnswer(num2, num1 % num2);
};


const gamePlayGcd = () => {
  const num1 = getRandomNumber();
  const num2 = getRandomNumber();
  const gameGoal = expectedAnswer(num1, num2);
  const gameQuestion = `${num1} ${num2}`;
  return cons(gameQuestion, gameGoal);
};

const gcdGame = () => gameInterface(gameTitle, gamePlayGcd);

export default gcdGame;
