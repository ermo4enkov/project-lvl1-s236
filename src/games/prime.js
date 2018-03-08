import { cons } from 'hexlet-pairs';
import gameInterface from '..';
import { getRandomNumber } from '../utils';

const gameTitle = 'Is this number prime?';

const checkNumberPrime = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return 'no';
    }
  }
  return number > 1 ? 'yes' : 'no';
};

const gamePlayPrime = () => {
  const number = getRandomNumber();
  const gameGoal = checkNumberPrime(number);
  const gameQuestion = `${number}`;
  return cons(gameQuestion, gameGoal);
};


const primeGame = () => gameInterface(gameTitle, gamePlayPrime);

export default primeGame;
