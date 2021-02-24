
// Uses CommonJS format (default in NodeJS)
const functions = require('./functions');

test('two plus three is six', () => {
    expect(functions.add(2, 3)).toBe(6);
});

test('two plus three is five', () => {
    expect(functions.add(2, 3)).toBe(5);
});

test('-5 plus -15 equals -20', () => {
    expect(functions.add(-5, -15)).toBe(-20);
});

test('adding floating point numbers correctly', () => {
    expect(functions.add(0.1, 0.2)).toBeCloseTo(0.3);
});

test('adding floating point numbers fail', () => {
    expect(functions.add(0.1, 0.2)).toBe(0.3); // doesn't work because of rounding error
});