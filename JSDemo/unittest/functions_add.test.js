
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

