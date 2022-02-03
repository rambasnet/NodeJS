const functions = require('./functions');
const url = require('url');
const assert = require('assert');

//import assert from 'assert'
//import { fileURLToPath } from 'url';
//import * as functions from './functions.js';




function test() {
    assert.strictEqual(functions.add(-10, -5), -15, '-5 + -10 != -15');
    assert.strictEqual(functions.add(5, -100), -95, '5 + -100 != -95');
    assert.strictEqual(functions.add(100, 0), 100, '100 + 0 != 100');

    assert.strictEqual(functions.sub(-10, -5), -5, '-10 - -5 != -5');
    assert.strictEqual(functions.sub(5, -100), 105, '5 - -100 != 105');
    assert.strictEqual(functions.sub(100, 0), 100, '100 - 0 != 100');
    console.log('All test cases passed!');
}


function solve() {
    let n1 = 10;
    let n2 = 5;
    console.log(`${n1} + ${n2} = ${n1+n2}`);
    console.log(`${n1} - ${n2} = ${n1-n2}`);
}

if (require.main == module) {
//if (process.argv[1] === url.fileURLToPath(import.meta.url)) {
    if (process.argv.length > 2 && process.argv[2] === 'test')
        test();
    else
        solve();
}

