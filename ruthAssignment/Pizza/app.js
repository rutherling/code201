//write information from calculate.js to populate the index.html with #"happy pizza odysseys"
var sales = document.getElementById('sales');
sales.textContent = b[0] + " happy pizza odysseys this week!";

//write information from calculate.js to populate sales-data.html with hourly sales data,
//weekly sales data, and total operational information from all locations in tables.
var operations = getElementById('operations');

// Create <table> and <tr>
var newTable = document.createElement('table');
var newTR = document.createElement('tr');

//Make <tr> a child of <table>
newTable.appendChild(newTR);

//var locationHour = storeValues();//location by hour from calculate.js

var locationHour = ['sample',1,5,9];

function showTable() {
  var tds = []; //empty array for table data. This function converts array items into table data.
  // Connect <td>'s as children of <tr>
  for (var ii = 0; ii < locationHour.length; ii++) {
    var newTD = document.createElement('td'); // New <td>
    newTD.textContent = locationHour[ii]; // Fill in <td>'s with data from storeValues
    newTR.appendChild(newTD); //<td> goes into <tr>
    tds.push(newTD); //not sure what this does
  }
  return tds;
};

var myTDs = showTable();

// Append <table> to DOM tree
operations.appendChild(newTable);
