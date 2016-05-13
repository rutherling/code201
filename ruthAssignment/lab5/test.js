//This is the test file trying to break compute.js in lab 05.

//Global Variable Declarations
countCorrect = 0;

//run all the tests
testSum();
testMultiply();
testSumAndMultiply();
testSumArray();
testMultiplyArray();

//Problem 1
function testSum() {
    if (typeof sum != 'undefined') {
        var s = sum(147, 256); //Call the function written in calculate.js
        if (403 === y) {
            console.log('Sum function passed');
            countCorrect++;
        } else {
            console.logconsole.log('Sum function failed');
        }
    } else {
        console.log('Fail. No such function');
    }
};
//Problem 2
function testMultiply() {
    if (typeof multiply != 'undefined') {
        var m = 147 * 256; //Call the function written in calculate.js
        if (37632 === m) {
            console.log('Multiply function passed');
            countCorrect++;
        } else {
            console.logconsole.log('Multiply function failed');
        }
    } else {
        console.log('Fail. No such function');
    }
};
//Problem 3
function testSumAndMultiply() {
    if (typeof sumAndMultiply != 'undefined') {
        var sm = sumAndMultiply(147, 256);
        if ([403, 37632] === sm) {
            console.log('Sum function passed');
            countCorrect++;
        } else {
            console.logconsole.log('Sum function failed');
        }
    } else {
        console.log('Fail. No such function');
    }
};
//Problem 4
function testSumArray() {
    if (typeof sumArray != 'undefined') {
        var sa = sumArray(147, 256, 0, 14); //Call the function written in calculate.js
        if (417 === sa) {
            console.log('sumArray function passed');
            countCorrect++;
        } else {
            console.logconsole.log('sumArray function failed');
        }
    } else {
        console.log('Fail. No such function');
    }
};
//Problem 5
function testMultiplyArray() {
    if (typeof multiplyArray != 'undefined') {
        var ma = multiplyArray(147, 256, 2, 14); //Call the function written in calculate.js
        if (1053696 === ma) {
            console.log('multiplyArray function passed');
            countCorrect++;
        } else {
            console.logconsole.log('multiplyArray function failed');
        }
    } else {
        console.log('Fail. No such function');
    }
};
