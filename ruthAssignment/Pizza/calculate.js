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
  console.log('Randomly generated pizzas this hour: ' + calcPizza);

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
  console.log('Randomly generated deliveries this hour: ' + calcDelivery);
//Use deliveries to determine the count of drivers. 1 driver has capacity of 3 deliveries.
  var calcDriver = Math.ceil(calcDelivery / 3);
  console.log('Count of drivers needed to make these deliveries: ' + calcDriver);
//Return an object with the count of pizzas, count of deliveries, and count of drivers.
//Later the next function will push countPizza, countDelivery, and countDriver to an array.
   var hourStats = {
    countPizza: calcPizza,
    countDelivery: calcDelivery,
    countDriver: calcDriver
   };
  return hourStats;
}
var x = new Pizzeria("lalala");
//Pizzeria.prototype.storeValues = //does this define a function? or do i set a variable equal to the result?
//^I don't think I need this yet.

function Pizzeria(pizzeria, demandArray){
  this.storeValues = function(){ //Method of pizzeria.
  //create empty array to store all the neighborhoods.
    var finalArray = [];

    //outer loop iterates through neighborhoods
    for(i = 0; i < demandArray.length; i++){
      //add property to object for neighborhood pizzeria
      this.pizzeria = pizzeria; //property

      //create array to store the hourly production and driver needs within the neighborhood object
      var singleStats = [];
      //Daily totals: as you go through the loop, add the hourly pizza, deliveries, and drivers for each location.
      var pizzaTotal = 0;
      var deliveryTotal = 0;
      var driverTotal = 0;
    //inner loop generates the countPizza, countDelivery, and countDriver by iterating through 18 hours of operation.
    for(j = 0; j < hours.length; j++){
        //Look through six scenarios for the varying shifts

        //8am to 10am
      if(j < 3){ //TODO you need a third index because each neighborhood is in its own array. Check the index for positions.
        minPizza = demandArray[i][0][1];
        maxPizza = demandArray[i][0][2];
        minDelivery = demand[i][0][3];
        maxDelivery = demand[i][0][4];
        //11am to 1pm
      } else if (j < 6){
        minPizza = demand[i][1][1];
        maxPizza = demand[i][1][2];
        minDelivery = demand[i][1][3];
        maxDelivery = demand[i][1][4];
      //2pm to 4pm
      } else if (j < 9){
        minPizza = demand[i][2][1];
        maxPizza = demand[i][2][2];
        minDelivery = demand[i][2][3];
        maxDelivery = demand[i][2][4];
          //5pm to 7pm
      } else if (j < 12){
        minPizza = demand[i][3][1];
        maxPizza = demand[i][3][2];
        minDelivery = demand[i][3][3];
        maxDelivery = demand[i][3][4];
        //8pm to 10pm
      } else if (j < 15){
        minPizza = demand[i][4][1];
        maxPizza = demand[i][4][2];
        minDelivery = demand[i][4][3];
        maxDelivery = demand[i][4][4];
        //11pm to 2am
      } else {
        minPizza = demand[i][5][1];
        maxPizza = demand[i][5][2];
        minDelivery = demand[i][5][3];
        maxDelivery = demand[i][5][4];
      }//end else
      //create a dummy object to equal the output of getValues.
      var dummy = getValues(minPizza, maxPizza, minDelivery, maxDelivery);

      //each neighborhood will have an array of 18 sets (pizza, delivery, driver)
      //push to the array that stores the object for each hours value
      singleStats.push(dummy);
      //var pizzeriaValues = getValues(minPizza, maxPizza, minDelivery); //add property to pizzeria object.
        //the above line also runs getValues and returns an object

        //use dummy.key to add a value to pizzaTotal, deliveryTotal, and driverTotal.
      pizzaTotal += dummy.countPizza;
      deliveryTotal += dummy.countDelivery;
      driverTotal += dummy.countDriver;
      //hourStats[i].Values;////////////I don't think i need this?
        //update the value for the hourValues key (hourStats)

    }//end inner for loop
    //add properties to the object.
    //push all 18 values to the array
    pizzeria.Values = singleStats;
    //create another property for total pizzas
    pizzeria.totalPizza = pizzaTotal;
    //create another property for total deliveries
    pizzeria.totalDelivery = deliveryTotal;
    //create another property for total drivers
    pizzeria.totalDriver = driverTotal;
    //push the neighborhood object to an array
    finalArray.push(pizzeria);
  }//end outer for loop
  console.table(finalArray);
  return finalArray;
} //end storeValues
}; //end object constructor function

//Function to assess weekly sales and operations.
//Function to prouduce a sum of six days' operation for all neighborhood locations.
function weeklyBusiness(){
  //Create empty arrays for each total you need. Put all the arrays into a parent array.
  var weeklyPizza = [];
  var weeklyDelivery = [];
  var weeklyDriver = [];

  var weeklyOperations = [];

  for (var ii = 0; ii < 6; ii++) {

//Function to push countPizza, countDelivery, and countDriver every hour, for each neighborhood
//run storeValues
  var finalArray = storeValues();

    weeklyPizza.push(finalArray[ii].totalPizza);
    weeklyDelivery.push(finalArray[ii].totalDelivery);
    weeklyDriver.push(finalArray[ii].totalDriver);
}//end for loop weeklyBusiness
    weeklyOperations.push(weeklyPizza, weeklyDelivery, weeklyDriver);
    console.log(weeklyOperations);
    return weeklyOperations;

}; //end weeklyBusiness
var a = weeklyBusiness(); //run the function ;D
console.log(a);
//Yet another function to loop through and add the six days together.
//Returns totalPizza, totalDelivery, and totalDriver for all locations.
function sumOperations(a){ //accepts a two-dimensional array.

  var operationSum = [];
  //loop through the three elements in weeklyOperations
  for (var ii = 0; ii < a.length; ii++) { //ii represents pizza, delivery, and driver
    var partialSum = 0;
    for (var k = 0; k < 6; k++) { //k represents one day of the operating week.
      partialSum += a[ii][k];
    }//end inner for
    operationSum.push(partialSum);

  }//end outer for
  return operationSum;
}//end sumOperations

var b = sumOperations(a);
console.log(b);
