import { cons } from 'hexlet-pairs';
import gameInterface from '..';
import { getRandomNumber } from '../utils';

const gameTitle = 'What is the result of the expression?';

const gamePlayEven = () => {
  const number = getRandomNumber();
  const gameGoal = number % 2 === 0 ? 'yes' : 'no';
  const gameQuestion = `${number}`;
  return cons(gameQuestion, gameGoal);
};

const evenOrNoGame = () => gameInterface(gameTitle, gamePlayEven);

export default evenOrNoGame;
