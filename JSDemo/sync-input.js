// must install readline-sync package via npm
// https://www.npmjs.com/package/readline-sync
// on terminal: $ npm i readline-sync
const readline = require('readline-sync');

var name = readline.question('May I have your name? ');
console.log('Hi there ' + name + '!');

var num1 = readline.question("Enter a number between 1 and 20: ");
console.log("Type of num1 is %s", typeof(num1));
var num2 = Number(num1) ** 2;
console.log("Squared of %s = %s", num1, num2);