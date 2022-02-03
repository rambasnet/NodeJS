/*
This is module 1. Declares question, answer, and areaOfCircle function
*/

// ES6 syntax
import {fileURLToPath} from 'url';

//const circle = require('./circle');
// const {findCircumference, findArea} = require('./circle');
//import {findCircumference, findArea} from './circle.js'

//const math = require('./library/my_math.js');
// import all the exported names under math namespace
import { findCircumference, findArea } from './circle.js';
import * as my_math from './library/my_math.mjs';

var question = "What is the meaning of Life, the Universe, and Everything?";
var answer = 42;

function main() {
  console.log(`question: ${question}`);
  console.log(`answer: ${answer}`);

  var area = findArea(10);
  console.log(`area = ${area.toFixed(2)} sq. unit`);
  var circum = findCircumference(10);
  console.log(`circumference = ${circum.toFixed(2)} unit`);
  console.log(`Third number in fibonacci seq = ${my_math.fib(3)}`);
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
//if (require.main === module) {
    main();
}
