//Problem 1: sum
function sum(a, b) {
  var s = a + b;
  console.log('The sum of ' + a + ' and ' + b + ' is ' + s);
  return s;
};

//Problem 2: multiplying
function multiply(a, b) {
  var m = a * b;
  console.log('The product of  ' + a + ' and ' + b + ' is ' + m + '.');
  return m;
};

//Problem 3: sum and multiplying
function sumAndMultiply(a, b, c) {
  var s = sum(sum(a,b),c);
  var m = multiply(multiply(a,b),c);
  var sm = [s,m];
  console.log('Problem 3 output: ' + [s,m]);
  console.log(a + ' and ' + b + ' and ' + ' and ' + c + ' sum to ' + s + '.');
  console.log('The numbers ' + a + ' and ' + b + ' and ' + c + ' have a product of ' + m + '.');
  return sm;
};

//Problem 4: sumArray
function sumArray(a) { //a must be an array. maybe we can test for what happens if you do not enter an array?
  var partialSum = 0;
  for (var i = 0; i < a.length; i++) {
    partialSum = sum(partialSum,a[i]);

  }
  var finalSum = partialSum;
  console.table(a); //shows the array passed into the function

  //Console log the message to display each of the items in the array.
  var storeString = '';
  for (var i = 0; i < a.length - 1; i++) {
    var currentNumber = a[i];
    if(i < (a.length - 1)){
      //concatenate the next item in the array to string and add a comma.
      currentNumber = a[i];
      storeString = storeString.concat(currentNumber + ', ');
    }
    //put on the last number without a comma
    var message = storeString + a[a.length - 1];
  }
  console.log(message + ' was passed in as an array of numbers, and ' + finalSum + ' is their sum.');
  return finalSum;
};

//Problem 5: multiplyArray
function multiplyArray(a) {
  var partialProduct = 1;
  for (var i = 0; i < a.length; i++) {
    partialProduct = multiply(partialProduct,a[i]);
  }
  console.table(a); //shows the array passed into the function

  //console log the message to display each of the itmes in the aray.
  var storeString = '';
  for (var i = 0; i < a.length - 1; i++){
    var currentNumber = a[i];
    if(i < a.length - 1){
      //concatenate the next item in the array to the string and add a comma
      currentNumber = a[i];
      storeString = storeString.concat(currentNumber + ', ');
    }
    var message = storeString + a[a.length - 1];
  }
  console.log(message + ' was passed in as an array of numbers, and ' + partialProduct + ' is their product.');
  return partialProduct;
};
