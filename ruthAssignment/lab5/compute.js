//Problem 1: sum
function sum(a, b) {
    var s = a + b;
    return s;
};

//Problem 2: multiplying
function multiply(a, b) {
    var m = a * b;
    return m;
};

//Problem 3: sum and multiplying
function sumAndMultiply(a, b, c) {
  var s = sum(sum(a,b),c)
  var m = multiply(multiply(a,b),c)

    return [s, m];
};

//Problem 4: sumArray
function sumArray(a) { //a must be an array. maybe we can test for what happens if you do not enter an array?
    var partialSum = 0;
    for (var i = 0; i < a.length; i++) {
        partialSum = sum(partialSum,a[i]);
    }
    return partialSum;
};

//Problem 5: multiplyArray
function multiplyArray(a) {
    var partialProduct = 1;
    for (var i = 0; i < a.length; i++) {
        partialProduct = multiply(partialProduct,a[i]);
    }
    return partialProduct;
};
