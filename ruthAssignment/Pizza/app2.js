function storeValues(){
  var finalArray = [];
  console.log('storeValues works!');
  return finalArray;
}
storeValues();

//Function to sum everything in an array.
function sumArray(a) { //a must be an array. maybe we can test for what happens if you do not enter an array?
  var partialSum = 0;
  for (var i = 0; i < a.length; i++) {
    partialSum += a[i];

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
sumArray(weeklyBusiness[0]);

////////////////////////////////

//demo code from lab
var kitchen = document.getElementById('operations');

// Create <table> and <tr>
var newTable = document.createElement('table');
var newTR = document.createElement('tr');

// Make <tr> a child of <table>
newTable.appendChild(newTR);

var names = ['Ruth', 'Lizzie'];

function makeTable() {
  var tds = [];
  // Connect <td>'s as children of <tr>
  for (var ii = 0; ii < 2; ii++) {
    var newTD = document.createElement('td'); // New <td>
    newTD.textContent = names[ii] + ' ' + Math.floor(Math.random() * 100); // Fill in <td>'s with text
    newTR.appendChild(newTD);
    tds.push(newTD);
  }
  return tds;
}

var myTDs = makeTable();

// Append <table> to DOM tree
kitchen.appendChild(newTable);


//////////////////////////////////////////////////////
//write information from calculate.js to populate sales-data.html with hourly sales data,
//weekly sales data, and total operational information from all locations in tables.
var operations = getElementById('operations');

// Create <table> and <tr>
var anotherTable = document.createElement('table');
var anotherTR = document.createElement('tr');

//Make <tr> a child of <table>
anotherTable.appendChild(anotherTR);

//var locationHour = storeValues();//location by hour from calculate.js

var locationHour = ['sample',1,5,9];

function showTable() {
  var tds = []; //empty array for table data. This function converts array items into table data.
  // Connect <td>'s as children of <tr>
  for (var ii = 0; ii < locationHour.length; ii++) {
    var newTD = document.createElement('td'); // New <td>
    newTD.textContent = locationHour[ii]; // Fill in <td>'s with data from storeValues
    anotherTR.appendChild(newTD); //<td> goes into <tr>
    tds.push(newTD); // put it in the array of TDs.
  }
  return tds;
};

var myTDs = showTable();

// Append <table> to DOM tree
operations.appendChild(anotherTable);
///////////////////////////////////////////////////////
// Connect <td>'s as children of <tr>
for (var ii = 0; ii < locationHour.length; ii++) {
  var newTD = document.createElement('td'); // New <td>
  newTD.textContent = locationHour[ii].neighborhood; // Fill in <td>'s with data from storeValues
  var newTD2 = document.createElement('td'); // New <td>
  newTD2.textContent = locationHour[ii].Values[0];
  var newTD3 = document.createElement('td'); // New <td>
  // newTD3.textContent = locationHour[ii].totalDelivery;
  // var newTD4 = document.createElement('td'); // New <td>
  // newTD4.textContent = locationHour[ii].totalDriver;
  anotherTR.appendChild(newTD); //<td> goes into <tr>
  anotherTR.appendChild(newTD2);
  // anotherTR.appendChild(newTD3);
  // anotherTR.appendChild(newTD4);
  tds.push(newTD); // put it in the array of TDs.
  tds.push(newTD2);
  // tds.push(newTD3);
  // tds.push(newTD4);
}
return tds;
