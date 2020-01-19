/*
This is module 1. Declares question, answer, and areaOfCircle function
*/

const circle = require('./circle.js');
const math = require('./library/my_math.js');

var question = "What is the meaning of Life, the Universe, and Everything?";
var answer = 42;


console.log(`question: ${question}`);
console.log(`answer: ${answer}`);

console.log(circle)
console.log(math)
var area = circle.findArea(10);
console.log(`area = ${area.toFixed(2)} sq. unit`);
var circum = circle.findCircumference(10);
console.log(`circumference = ${circum.toFixed(2)} unit`);
console.log(`Third number in fibonacci seq = ${math.fib(3)}`);