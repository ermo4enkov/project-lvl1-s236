import readlineSync from 'readline-sync';

export const getRandomNumber = (min = 1, max = 100) =>
  Math.floor(Math.random() * ((max - min) + 1)) + min;

export const sayHello = subtitle => console.log(`Welcome to the Brain Games!\n\n${subtitle}`);
export const getRandomItem = arr => arr[Math.floor(Math.random() * arr.length)];
export const checkNumberAnswer = (goal, answer) => Number(goal) === Number(answer);

const getUserName = () => {
  console.log('Welcome to the Brain Games!\n\n');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}`);
};

export default { getUserName };
