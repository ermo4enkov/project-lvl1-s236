import readlineSync from 'readline-sync';

const getRandomNumber = (min = 1, max = 100) => (Math.random() * ((max - min) + min)).toFixed(0);

const isNumberEven = number => number % 2 === 0;

const checkAnswer = (answer, number) => (isNumberEven(number) && answer === 'yes') || (!isNumberEven(number) && answer === 'no');

const switchAnswer = (number) => {
  return isNumberEven(number) ? 'yes' : 'no';
};

const findOutNumber = (userName) => {
  let count = 0;
  while (count < 3) {
    const number = getRandomNumber();
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');
    if (checkAnswer(answer, number)) {
      count += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${switchAnswer(number)}'`);
      console.log(`Let's try again, ${userName}!`);
      return false;
    }
  }
  console.log('Correct!');
  console.log(`Congratulations ${userName}`);
};

const evenOrNoGame = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no".\n');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}\n`);
  findOutNumber(userName);
};

export default evenOrNoGame;
