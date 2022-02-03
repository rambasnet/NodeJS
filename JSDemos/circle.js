/*
This is module 2. Defines question, answer and
circumference function
*/
const assert = require('assert').strict;
//import assert from 'assert';
//import { fileURLToPath } from 'url';

const { PI } = Math;

var question = "What is your quest?";
var answer = "To seek the holy grail.";

function findCircumference(radius) {
  /*
    Given radius of a circle, finds and returns its circumference.
    */
  return 2 * Math.PI * radius;
}

/*   
Given radius of a circle, this funciton finds and returns its area.
*/
let findArea = radius => PI * radius ** 2;

// CommonJS
module.exports = { findCircumference, findArea };

// ESM - EcmaScript Module
//export { findCircumference, findArea };

//if (process.argv[1] === fileURLToPath(import.meta.url)) {
if (require.main == module) {
  console.log(`question: ${question}`);
  console.log(`answer: ${answer}`);
  var radius = 2;
  var circum = findCircumference(radius);
  console.log(`circumference = ${circum.toFixed(2)} unit`);
  console.log(`area = ${findArea(radius).toFixed(2)} sq. unit`);
  test();
}

function test() {
  var radius = 2;
  var circum = findCircumference(radius);
  console.log(circum.toFixed(2));
  assert.strictEqual(circum.toFixed(2), '12.57', 'not equal');
  console.log('all test cases passed!');
}
