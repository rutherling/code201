//write information from calculate.js to populate sales-data.html with hourly sales data,
//weekly sales data, and total operational information from all locations in tables.
var operations = document.getElementById('operations');

// Create <table> and <tr> for each neighborhood, then <tr> for each hour
var parentTable = document.createElement('table');

var locationHour = storeValues();//location by hour from calculate.js
console.log(locationHour);
//var locationHour = ['sample',1,5,9];

function showTable() {
  var neighborhoodTable = []; //empty array for table data. This function converts finalArray items into a table for display.
  for(ii = 0; ii < locationHour.length; ii++){
    var neighborhoodTR = document.createElement('tr');//each neighborhood gets its own row.
    var neighborhoodTD = document.createElement('td');//create TD
    neighborhoodTD.textContent = locationHour[ii].neighborhood; //object.key
    neighborhoodTR.appendChild(neighborhoodTD);//put data into the row, <TD> to <TR>

    var pizzaHead = document.createElement('td');
    pizzaHead.textContent = "Pizzas Sold"
    neighborhoodTR.appendChild(pizzaHead);
    var deliveryHead = document.createElement('td');
    deliveryHead.textContent = "Number of Deliveries";
    neighborhoodTR.appendChild(deliveryHead);
    var driverHead = document.createElement('td');
    driverHead.textContent = "Drivers Needed";
    neighborhoodTR.appendChild(driverHead);
    parentTable.appendChild(neighborhoodTR);//put the row into the table.
    neighborhoodTable.push(neighborhoodTD);//put the TD into the array.
//not sure I need this?
  //var hourTable = []; //hour table will clear each time the neighborhoods' hours finish iterating.
    for(j = 0; j < locationHour[0].Values.length; j++){
    var hourTR = document.createElement('tr'); //each hour gets its own row
    var hourTD = document.createElement('td'); //each hour is a TD
    hourTD.textContent = hours[j]; //hours array from calculate.js
    hourTR.appendChild(hourTD); //put data into the row
    parentTable.appendChild(hourTR);//put the row into the table
    //create column for pizza
    var pizzaTD = document.createElement('td');//create TD for pizza
    pizzaTD.textContent = locationHour[ii].Values[j].countPizza; //put data into the TD
    hourTR.appendChild(pizzaTD);//put data into the row

    //create column for delivery
    var deliveryTD = document.createElement('td');//create TD for delivery
    deliveryTD.textContent = locationHour[ii].Values[j].countDelivery;//fill TD with delivery data
    hourTR.appendChild(deliveryTD);

    //create column for driver
    var driverTD = document.createElement('td');//create TD for driver
    driverTD.textContent = locationHour[ii].Values[j].countDriver;//put data into the TD
    hourTR.appendChild(driverTD);//fill TD with driver data
    }//end inner for loop
  }//end outer for loop
  return neighborhoodTable;
};//end showTable function

//var myTDs =
showTable();

// Append <table> to DOM tree
operations.appendChild(parentTable);
