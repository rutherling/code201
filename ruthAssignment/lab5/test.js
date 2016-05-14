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
    var s = sum(147, 256); //Call the function written in compute.js
    if (403 === s) {
      console.log('Sum function passed');
      countCorrect++;
    } else {
      console.logconsole.log('Sum function failed');
    }
  } else {
    console.log('Fail. No such function');
  }
  console.log('Sum result: ' + s);
};
//Problem 2
function testMultiply() {
  if (typeof multiply != 'undefined') {
    var m = 147 * 256; //Call the function written in compute.js
    if (37632 === m) {
      console.log('Multiply function passed');
      countCorrect++;
    } else {
      console.logconsole.log('Multiply function failed');
    }
  } else {
    console.log('Fail. No such function');
  }
  console.log('Multiply result: ' + m);
};
//Problem 3
function testSumAndMultiply() {
  if (typeof sumAndMultiply != 'undefined') {
    var sm = sumAndMultiply(147, 256, 14);
    if ([417, 526848] === sm) {
      console.log('Sum function passed');
      countCorrect++;
    } else {
      console.log('Sum function failed');
    }
  } else {
    console.log('Fail. No such function');
  }
  console.log('sumAndMultiply SUM result: ' + sm[0] + '. MULTIPLY result: ' + sm[1]);
};
//Problem 4
function testSumArray() {
  if (typeof sumArray != 'undefined') {
    var sa = sumArray([147, 256, 0, 14]); //Call the function written in compute.js
    if (417 === sa) {
      console.log('sumArray function passed');
      countCorrect++;
    } else {
      console.logconsole.log('sumArray function failed');
    }
  } else {
    console.log('Fail. No such function');
  }
  console.log('sumArray result: ' + finalSum);
};
//Problem 5
function testMultiplyArray() {
  if (typeof multiplyArray != 'undefined') {
    var ma = multiplyArray([147, 256, 2, 14]); //Call the function written in compute.js
    if (1053696 === ma) {
      console.log('multiplyArray function passed');
      countCorrect++;
    } else {
      console.logconsole.log('multiplyArray function failed');
    }
  } else {
    console.log('Fail. No such function');
  }
  //console.log('multiplyArray result: ' + partialProduct);
};

console.log('Passed ' + countCorrect + ' tests!');
