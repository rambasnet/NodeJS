
// Use CommonJS syntax (default in NodeJS)
const functions = require('./functions');
// Use ES6 syntax
// import * as functions from './functions.js'

test('two minus three is -1', () => {
    expect(functions.sub(2, 3)).toBe(-1);
});

test('two minus three is five', () => {
    expect(functions.sub(2, 3)).toBe(1);
});

test('-5 minus -15 equals -20', () => {
    expect(functions.sub(-5, -15)).toBe(-20);
});

test('subtracting floating point numbers', ()=>{
    expect(functions.sub(3.5, 3.1)).toBeCloseTo(0.4);
});

