import { cons } from 'hexlet-pairs';
import gameInterface from '..';
import { getRandomNumber } from '../utils';

const gameTitle = 'Is this number prime?';

const checkNumberPrime = (number, step = 2) => {
  if (number < 2) {
    return 'no';
  }
  if (number % step === 0) {
    return 'no';
  }
  if (step >= number / 2) {
    return 'yes';
  }
  return checkNumberPrime(number, step + 1);
};

const gamePlayPrime = () => {
  const number = getRandomNumber();
  const gameGoal = checkNumberPrime(number);
  const gameQuestion = `${number}`;
  return cons(gameQuestion, gameGoal);
};


const primeGame = () => gameInterface(gameTitle, gamePlayPrime);

export default primeGame;
