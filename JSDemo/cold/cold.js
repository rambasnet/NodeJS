/*
open.kattis.com
cold problem
- automated testing demo
*/
const readline = require('readline');
const assert = require('assert').strict;

function answer(nums) {
    var count = 0;
    for(var i in nums) {
        if (parseInt(nums[i]) < 0) 
            count += 1;
    }
    return count;
}

function test() {
    assert.strictEqual(answer([1, 2, -100, 4545, -34343, -3343]), 3);
    assert.strictEqual(answer([123, 343, 3434, 34535, 57, 0]), 0);
    console.log('all test cases passed...')
}

function solve() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    lineCount = 1;
    rl.on('line', (line) => {
        //console.log(line);
        if (lineCount == 2) {
            var nums = line.split(' ');
            console.log(answer(nums));
        }
        else
            lineCount += 1;
    })
}

if (require.main == module) {
    if (process.argv.length > 2 && process.argv[2] === 'test')
        test()
    else
        solve();
}



