import readlineSync from 'readline-sync';

const getUserName = () => {
  console.log('Welcome to the Brain Games!\n\n');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}`);
};

export const getRandomNumber = (min = 1, max = 100) =>
  (Math.random() * ((max - min) + min)).toFixed(0);

export default { getUserName, getRandomNumber };
