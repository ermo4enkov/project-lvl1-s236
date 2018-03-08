import { cons } from 'hexlet-pairs';
import gameInterface from '..';
import { getRandomNumber } from '../utils';

const gameTitle = 'What number is missing in this progression?';

const createProgression = () => {
  let number = getRandomNumber();
  const step = getRandomNumber(1, 10);
  const digits = [number];
  for (let i = 0; i < 9; i += 1) {
    digits.push(number += step);
  }
  return digits;
};

const gamePlayProgression = () => {
  const quest = getRandomNumber(1, 10);
  const expression = createProgression();
  const gameGoal = expression[quest];
  expression[quest] = '..';
  const gameQuestion = `${expression}`;
  return cons(gameQuestion, gameGoal);
};


const progressionGame = () => gameInterface(gameTitle, gamePlayProgression);

export default progressionGame;
