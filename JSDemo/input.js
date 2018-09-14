// must install readline-sync package via npm
// https://www.npmjs.com/package/readline-sync
// on terminal: $ npm i readline-sync
const readline = require('readline-sync');

var name = readline.question('May I have your name? ');
console.log('Hi there ' + name + '!');