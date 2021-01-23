
// Uses CommonJS format (default in NodeJS)
const functions = require('./functions');

test('two minus three is -1', () => {
    expect(functions.sub(2, 3)).toBe(-1);
});

test('two minus three is five', () => {
    expect(functions.sub(2, 3)).toBe(1);
});

test('-5 minus -15 equals -20', () => {
    expect(functions.sub(-5, -15)).toBe(-20);
});

