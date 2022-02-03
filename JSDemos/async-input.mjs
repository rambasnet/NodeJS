/*
Guess the Number game
By:
Date:

This program generates a random number between 1 and 20 and asks user to guess that number.
If the user guesses it within 6 turns, s/he wins otherwise loses.

Algorithm steps:
1. 
2.
3.

*/

//const readline = require('readline');
import readline from 'readline'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var name;
console.log("Hi there! What's your name? ");

rl.on('line', (line) => {
    name = line;
    console.log('Hello,', name);
    console.log('Are you ready to play this game? ')
});

console.log('All done!')
