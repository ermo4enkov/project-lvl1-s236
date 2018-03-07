// function getRandomNumber(min = 1, max = 100) {
//   return (Math.random() * ((max - min) + min)).toFixed(0);
// }

function getRandomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function checkNumberAnswer(goal, answer) {
  return Number(goal) === Number(answer);
}

const addNumbers = function (sum, current) {
  return Number(sum) + Number(current);
};

function totalSumOfNumbers(num) {
  const arr = num.split('');
  return arr.reduce(addNumbers, 0);
}

export { getRandomItem, checkNumberAnswer, totalSumOfNumbers };
