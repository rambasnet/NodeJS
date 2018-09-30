// open.kattis.com hello problem
// accessing the main module: https://nodejs.org/docs/latest/api/all.html#modules_accessing_the_main_module

const assert = require('assert').strict;

function answer() {
    return 'Hello World!';
}

function solve() {
    console.log(answer());
}

function test() {
    assert.strictEqual(answer(), 'Hello World!');
    console.log('all test cases passed...');
}

// if the script file has been run directly using node
if (require.main == module) {
    if (process.argv.length > 2 && process.argv[2] == 'test')
        test();
    else
        solve();
}