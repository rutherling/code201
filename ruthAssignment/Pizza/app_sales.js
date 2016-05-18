//write information from calculate.js to populate sales-data.html with hourly sales data,
//weekly sales data, and total operational information from all locations in tables.
var operations = document.getElementById('operations');

// Create <table> and <tr>
var anotherTable = document.createElement('table');
var anotherTR = document.createElement('tr');

//Make <tr> a child of <table>
anotherTable.appendChild(anotherTR);

var locationHour = storeValues();//location by hour from calculate.js
console.log(locationHour);
//var locationHour = ['sample',1,5,9];

function showTable() {
  var tds = []; //empty array for table data. This function converts array items into table data.
  // Connect <td>'s as children of <tr>
  for (var ii = 0; ii < locationHour.length; ii++) {
    var newTD = document.createElement('td'); // New <td>
    newTD.textContent = locationHour[ii].neighborhood; // Fill in <td>'s with data from storeValues
    var newTD2 = document.createElement('td'); // New <td>
    newTD2.textContent = locationHour[ii].totalPizza;
    var newTD3 = document.createElement('td'); // New <td>
    newTD3.textContent = locationHour[ii].totalDelivery;
    var newTD4 = document.createElement('td'); // New <td>
    newTD4.textContent = locationHour[ii].totalDriver;
    anotherTR.appendChild(newTD); //<td> goes into <tr>
    anotherTR.appendChild(newTD2);
    anotherTR.appendChild(newTD3);
    anotherTR.appendChild(newTD4); 
    tds.push(newTD); // put it in the array of TDs.
    tds.push(newTD2);
    tds.push(newTD3);
    tds.push(newTD4);
  }
  return tds;
};

var myTDs = showTable();

// Append <table> to DOM tree
operations.appendChild(anotherTable);
