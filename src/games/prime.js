import { cons } from 'hexlet-pairs';
import gameInterface from '..';
import { getRandomNumber } from '../utils';

const gameTitle = 'Is this number prime?';

const checkNumberPrime = (number, step = 2) => {
  if (number < 2) {
    return false;
  }
  if (number % step === 0) {
    return false;
  }
  if (step >= number / 2) {
    return true;
  }
  return checkNumberPrime(number, step + 1);
};

const gamePlayPrime = () => {
  const number = getRandomNumber();
  const gameGoal = checkNumberPrime(number) ? 'yes' : 'no';
  const gameQuestion = `${number}`;
  return cons(gameQuestion, gameGoal);
};


const primeGame = () => gameInterface(gameTitle, gamePlayPrime);

export default primeGame;
