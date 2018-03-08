import { cons } from 'hexlet-pairs';
import gameInterface from '..';
import { getRandomNumber } from '../utils';

const gameTitle = 'Balance the given number.';

const getBalanceNumber = (number) => {
  const integers = String(number).split('').sort((a, b) => a - b);
  const length = integers.length - 1;
  const first = Number(integers[0]);
  const last = Number(integers[length]);
  if (last - first <= 1) {
    return integers.join('');
  }
  integers[0] = first + 1;
  integers[length] = last - 1;
  const result = Number(integers.join(''));

  return getBalanceNumber(result);
};


const gamePlayBalance = () => {
  const number = getRandomNumber(11, 999);
  const gameGoal = getBalanceNumber(number);
  const gameQuestion = `${number}`;
  return cons(gameQuestion, gameGoal);
};

const balanceGame = () => gameInterface(gameTitle, gamePlayBalance);

export default balanceGame;
