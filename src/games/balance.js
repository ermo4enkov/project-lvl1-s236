import { cons } from 'hexlet-pairs';
import gameInterface from '..';
import { getRandomNumber } from '../utils';

const gameTitle = 'Balance the given number.';

const getBalanceNumber = (number) => {
  const integers = String(number).split('').sort((a, b) => a - b).join('');
  const min = Number(integers.charAt(0));
  const max = Number(integers.charAt(integers.length - 1));
  const remainder = max - min;
  if (remainder < 2) {
    return integers;
  }
  const balance = (remainder - (remainder % 2)) / 2;
  let restStr = '';
  if (integers.length > 2) {
    restStr = integers.substring(1, integers.length - 2);
  }
  return getBalanceNumber(`${min + balance}${restStr}${max - balance}`);
};


const gamePlayBalance = () => {
  const number = getRandomNumber(11, 999);
  const gameGoal = getBalanceNumber(number);
  const gameQuestion = `${number}`;
  return cons(gameQuestion, gameGoal);
};

const balanceGame = () => gameInterface(gameTitle, gamePlayBalance);

export default balanceGame;
