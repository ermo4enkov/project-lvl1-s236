import readlineSync from "readline-sync";
import colors from "colors";

console.log("Welcome to the " + "Brain ".bold + "Games!\n\n");
const userName  = readlineSync.question('May I have your name? ');
console.log("Hello, " + userName.bold);