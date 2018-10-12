const assert = require('assert').strict;

/*
    factorial module
*/

// given n finds the factorial of n
function factorial(n) {
    var fact = 1;
    for (var i=2; i<=n; i++)
        fact *= i
    return fact
}

/*
Given n, the following function finds nth value in fibonacci sequence
*/
var memo = {};
function fib(n) {
    if (n <= 1)
        return 1;
    if (n in memo) {
        return memo[n];
    }
    return memo[n] = fib(n-1) + fib(n-2);
}

function test() {
    assert.strictEqual(factorial(5), 120);
    assert.strictEqual(factorial(10), 3628800);
    assert.strictEqual(factorial(50), 30414093201713378043612608166064768844377641568960512000000000000);
    // factorial(100) too large of integer for JS to handle
    //assert.strictEqual(factorial(100), 93326215443944152681699238856266700490715968264381621468592963895217599993229915608941463976156518286253697920827223758251185210916864000000000000000000000000);
    console.log('all test cases passed...');
}

if (require.main == module) {
   test();
}
else {
    module.exports = {fib, factorial};
}
