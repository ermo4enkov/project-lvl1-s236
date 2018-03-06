import readlineSync from 'readline-sync';

export const getUserName = () => {
  console.log('Welcome to the Brain Games!\n\n');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}`);
};

function getRandomNumber(min = 1, max = 100) {
  return (Math.random() * ((max - min) + min)).toFixed(0);
}

function getRandomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export { getRandomNumber, getRandomItem };
