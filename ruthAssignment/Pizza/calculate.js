//Array of demand behavior
//[time slot, min production, max production, min deliveries, max deliveries]
//I might not need this if I put hte max and min in the For loop.
var demandArray = [
  //Hillsboro
  [[0, 4, 0, 4], //8am
  [0, 7, 0, 4],  //11am
  [2, 15, 1, 4], //2pm
  [15, 35, 3, 8], //5pm
  [12, 31, 5, 12], //8pm
  [5, 20, 5, 11]], //11pm
  //Pearl
  [[0, 4, 0, 4], //8am
  [0, 7, 0, 4],  //11am
  [2, 15, 1, 4], //2pm
  [15, 35, 3, 8], //5pm
  [12, 31, 5, 12], //8pm
  [5, 20, 5, 11]], //11pm
  //DowntownPDX
  [[0, 4, 0, 4], //8am
  [0, 7, 0, 4],  //11am
  [2, 15, 1, 4], //2pm
  [15, 35, 3, 8], //5pm
  [12, 31, 5, 12], //8pm
  [5, 20, 5, 11]], //11pm
  //Buckman
  [[0, 4, 0, 4], //8am
  [0, 7, 0, 4],  //11am
  [2, 15, 1, 4], //2pm
  [15, 35, 3, 8], //5pm
  [12, 31, 5, 12], //8pm
  [5, 20, 5, 11]], //11pm
  //PDXairport
  [[0, 4, 0, 4], //8am
  [0, 7, 0, 4],  //11am
  [2, 15, 1, 4], //2pm
  [15, 35, 3, 8], //5pm
  [12, 31, 5, 12], //8pm
  [5, 20, 5, 11]], //11pm
  //Clackamas
  [[0, 4, 0, 4], //8am
  [0, 7, 0, 4],  //11am
  [2, 15, 1, 4], //2pm
  [15, 35, 3, 8], //5pm
  [12, 31, 5, 12], //8pm
  [5, 20, 5, 11]] //11pm
];

var hours = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 0, 1];//pizzerias close at 2am.

//Array of pizza locations. in calculate2.js, these are the property of the Demand object.
var neighborhood = ['Hillsboro', 'Pearl', 'DowntownPDX', 'Buckman', 'PDXairport', 'Clackamas'];

//Function to return pizzas, deliveries, and drivers to be used for a specified range of hours
//Random generation of pizza's count, given min and max for that hour
function getValues(minPizza, maxPizza, minDelivery, maxDelivery){ //compare maxDelivery to calcPizza for ceiling
  var calcPizza = Math.floor(Math.random() * (maxPizza - minPizza + 1)) + minPizza;

//Use pizza's calc as delivery's max for that specific hour. Delivery min is in the array.
  var calculateDelivery = function(){//start calculate Delivery function
    var calcDelivery;
    if(maxDelivery < calcPizza){
      calcDelivery = Math.floor(Math.random() * (1 + maxDelivery - minDelivery)) + minDelivery; //maxDelivery is the ceiling
    } else {
      calcDelivery = Math.floor(Math.random() * (1 + calcPizza - minDelivery)) + minDelivery;
    }//end else
    return calcDelivery;
  };//end anonymous function
  var calcDelivery = calculateDelivery();
//Use deliveries to determine the count of drivers. 1 driver has capacity of 3 deliveries.
  var calcDriver = Math.ceil(calcDelivery / 3);
//Return an object with the count of pizzas, count of deliveries, and count of drivers.
//Later the next function will push countPizza, countDelivery, and countDriver to an array.
  var hourStats = {
    countPizza: calcPizza,
    countDelivery: calcDelivery,
    countDriver: calcDriver
  };
  return hourStats;
}

function initializeTotal(){
  //create array to store the hourly production and driver needs within the neighborhood object

  //Daily totals: as you go through the loop, add the hourly pizza, deliveries, and drivers for each location.
  //initialize to 0.
  var pizzaTotal = 0;
  var deliveryTotal = 0;
  var driverTotal = 0;
};

//do some for loops that create all the pizzerias.

function Pizzeria(neighborhood, demandIndivArray){ //user input MUST be in demandArray before you call Pizzeria object consturctor.
  this.pizzeria = neighborhood;

  this.getHourly = function(){//converts demandIndivArray to hourlyValues.
    var hourlyArray = []; //turns into this.Values.
    initializeTotal();

    //inner loop generates the countPizza, countDelivery, and countDriver by iterating through 18 hours of operation.
    for(j = 0; j < hours.length; j++){ //figures out the minPizza, maxPizza, minDelivery, maxDelivery.
        //Look through six scenarios for the varying shifts

        //8am to 10am
      if(j < 3){ //TODO you need a third index because each neighborhood is in its own array. Check the index for positions.
        minPizza = demandIndivArray[0][0];
        maxPizza = demandIndivArray[0][1];
        minDelivery = demandIndivArray[0][2];
        maxDelivery = demandIndivArray[0][3];
        //11am to 1pm
      } else if (j < 6){
        minPizza = demandIndivArray[1][0];
        maxPizza = demandIndivArray[1][1];
        minDelivery = demandIndivArray[1][2];
        maxDelivery = demandIndivArray[1][3];
      //2pm to 4pm
      } else if (j < 9){
        minPizza = demandIndivArray[2][0];
        maxPizza = demandIndivArray[2][1];
        minDelivery = demandIndivArray[2][2];
        maxDelivery = demandIndivArray[2][3];
          //5pm to 7pm
      } else if (j < 12){
        minPizza = demandIndivArray[3][0];
        maxPizza = demandIndivArray[3][1];
        minDelivery = demandIndivArray[3][2];
        maxDelivery = demandIndivArray[3][3];
        //8pm to 10pm
      } else if (j < 15){
        minPizza = demandIndivArray[4][0];
        maxPizza = demandIndivArray[4][1];
        minDelivery = demandIndivArray[4][2];
        maxDelivery = demandIndivArray[4][3];
        //11pm to 2am
      } else {
        minPizza = demandIndivArray[5][0];
        maxPizza = demandIndivArray[5][1];
        minDelivery = demandIndivArray[5][2];
        maxDelivery = demandIndivArray[5][3];
      }//end else
        //
      var singleHour = getValues(minPizza, maxPizza, minDelivery, maxDelivery); //returns an object of countPizza, countDelivery, and countDriver

        //push to the array that stores the object for each hour's value
      hourlyArray.push(singleHour);
    }//end for loop j (18 hours)
    return hourlyArray;
  }; //end this.getHourly()
  this.Values = this.getHourly(); //runs the function and assigns the output to a variable.

  this.getTotals = function(){ //create another method for total pizzas, deliveries, and drivers.
    var pizzaTotal = 0;
    var deliveryTotal = 0;
    var driverTotal = 0;
    var totals = [];

    for (var k = 0; k < hours.length; k++) {
      pizzaTotal += this.Values[k].countPizza;
      deliveryTotal += this.Values[k].countDelivery;
      driverTotal += this.Values[k].countDriver;
    }
    totals.push(pizzaTotal, deliveryTotal, driverTotal);
    return totals;
  }; //end this.getTotals;
  this.dailyTotals = this.getTotals();  //runs the function and returns an array of one day's total pizzas, deliveries, and drivers.
}; //end object constructor function

var getPizzerias = function (){ //creates Pizzeria objects for each current location. returns an array.
  var pizzeriaArray = [];
  for (var i = 0; i < neighborhood.length; i++) { //cycle through all the known neighborhoods
    var newLoc = new Pizzeria(neighborhood[i], demandArray[i]); //create the object
    pizzeriaArray.push(newLoc); //store the object in an array
  }//end For loop
  return pizzeriaArray;
};

var finalArray = getPizzerias();//run the function
console.log(finalArray);

getWeekly = function(){ //returns an array of all neighborhoods' weekly figures (sub arrays).
 //Create empty arrays for each total you need. Put all the arrays into a parent array.
  var weeklyOperations = [];

//finalArray.length == neighborhood.length. loop through each neighborhood.
  for (var m = 0; m < finalArray.length; m++) {
    var weeklyPizza = 0;
    var weeklyDelivery = 0;
    var weeklyDriver = 0;
    var weeklyLocation = []; //stores weekly pizza, delivery, and driver for a single location

    for (var ii = 0; ii < 6; ii++) { //6 for 6 days of operation.
      var tempLoc = new Pizzeria(finalArray[m], demandArray[m]); //create a day of operations at one location
      //declare a set of variables that you'll add to during each loop.
      weeklyPizza += tempLoc.dailyTotals[0];
      weeklyDelivery += tempLoc.dailyTotals[1];
      weeklyDriver += tempLoc.dailyTotals[2];
    } //end for loop through 6 days of operation
    weeklyLocation.push(weeklyPizza, weeklyDelivery, weeklyDriver);//put the weekly totals into an array.
    Pizzeria.weeklyTotal = weeklyLocation; //make it a property of Pizzeria.
    weeklyOperations.push(weeklyLocation); //There will be one item for each location.

  }//end For loop that goes through finalArray of neighborhood objects.
  console.log(weeklyOperations);
  return weeklyOperations;
}; //end getWeekly
Pizzeria.Weekly = getWeekly(); //run the function ;D
var a = getWeekly();

function sumOperations(a){ //accepts a two-dimensional array.
  var operationSum = [];

  var franchisePizza = 0;
  var franchiseDelivery = 0;
  var franchiseDriver = 0;
  //loop through the neighborhoods in weeklyOperations.
  for (var ii = 0; ii < a.length; ii++) { //ii represents one week of operations at a single location.
    franchisePizza += a[ii][0];
    franchiseDelivery += a[ii][1];
    franchiseDriver += a[ii][2];
  }//end inner for
  operationSum.push(franchisePizza, franchiseDelivery, franchiseDriver);
  return operationSum;
}//end sumOperations

var b = sumOperations(a);
console.log(b);
