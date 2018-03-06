import readlineSync from 'readline-sync';

const getRandomNumber = (min = 1, max = 100) => (Math.random() * ((max - min) + min)).toFixed(0);

const isNumberEven = number => number % 2 === 0;

const checkAnswer = (answer, number) => (isNumberEven(number) && answer === 'yes') || (!isNumberEven(number) && answer === 'no');

const findOutNumber = () => {
  const number = getRandomNumber();
  console.log(`Question: ${number}`);
  const answer = readlineSync.question('Your answer: ');
  console.log(checkAnswer(answer, number));
};

const evenOrNoGame = () => {
  console.log('Welcome to the Brain Games!\n\n');
  console.log('Answer "yes" if number even otherwise answer "no"');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}`);
  findOutNumber();
};

export default evenOrNoGame;

// Question: 15
// Your answer: no
// Correct!
// Question: 6
// Your answer: yes
// Correct!
// Question: 7
// Your answer: no
// Correct!
// Congratulations, Sam!
