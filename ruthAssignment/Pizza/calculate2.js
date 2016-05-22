//More like a scratch pad and experiment space. doesn't actually connect to anything!

//demand behavior
//object constructor
function Demand (neighborhood,
  minPizza8, maxPizza8, minDelivery8, maxDelivery8,
  minPizza11, maxPizza11, minDelivery11, maxDelivery11,
  minPizza14, maxPizza14, minDelivery14, maxDelivery14,
  minPizza17, maxPizza17, minDelivery17, maxDelivery17,
  minPizza20, maxPizza20, minDelivery20, maxDelivery20,
  minPizza23, maxPizza23, minDelivery23, maxDelivery23) {
  this.name = neighborhood;
  this.hourlyStats = function(){
    houlyArray = [
      [minPizza8, maxPizza8, minDelivery8, maxDelivery8],
      [minPizza11, maxPizza11, minDelivery11, maxDelivery11],
      [minPizza14, maxPizza14, minDelivery14, maxDelivery14],
      [minPizza17, maxPizza17, minDelivery17, maxDelivery17],
      [minPizza20, maxPizza20, minDelivery20, maxDelivery20],
      [minPizza23, maxPizza23, minDelivery23, maxDelivery23]
    ];
    return hourlyArray;
  }
} //this way, if you know the pizzeria's neighborhood, you can get the hourly demand behavior
//.hourlyStats[time slot 0 to 5][min/max pizza/delivery]

//pizzerias close at 2am.
var hours = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 0, 1];

/Function to return pizzas, deliveries, and drivers to be used for a specified range of hours
//Random generation of pizza's count, given min and max for that hour
function getValues(pizzeria){ //compare maxDelivery to calcPizza for ceiling
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

//Object constructor function that makes a new pizzeria
function Pizzeria(pizzeria, hourlyDemand){ //needs name (neighborhood) and demand array.
  this.name = pizzeria; //name the pizzeria
  this.hourlyDemand = function hourlyDemand{ //run this function each time you create a new pizzeria
  demand.push(hourlyDemand); //add the pizzeria's demand to the demand array.
  this.Values = getValues(); //returns array with simulated hourly operations
  //get values needs 4 entered parameters in calculate.js.
  return demand[demand.length]; //return the most recent item in the demand array

  }; //used to create an object for each pizzeria.
}//once i define its demand behavior by the .length, it doesn't update, right? even though that array may change dimensions?

var x = new Pizzeria("lalala");
//Pizzeria.prototype.storeValues = //does this define a function? or do i set a variable equal to the result?
//^I don't think I need this yet.

var pizzeriaArray = []; //TODO make sure the finalArray's dimensions make sense for functions that call newPizzeria.
//FUTURE FOR LAB 8: each time a new pizzeria is created, finalArray gets wiped out and re-creates each pizzeria, old and new.
//this is a LOCAL variable, so make sure to invoke the function and assign it to a variable OUTSIDE of the object constructor.

//do some for loops that create all the pizzerias.

function Pizzeria(neighborhood, hourlyArray){ //user input MUST be in demandArray before you call Pizzeria object consturctor.
  this.storeValues = function(){ //Method of pizzeria.
  //create empty array to store all the neighborhoods.

    //outer loop iterates through neighborhoods
    for(i = 0; i < neighborhood.length; i++){
      //add property to object for neighborhood pizzeria
      this.pizzeria = neighborhood[i]; //property. pizzeria comes from user input. it is also stored in neighborhood array.
      //I think using "this." will work because I'm inside the object constructor.
      //////////////////problem: everytime you loop through, you'll rename all the pizzerias with the most recent addition's name.
      //maybe instead of recreating everything everytime, you could have a .push() to a global array.

      function initializeTotal(){
        //create array to store the hourly production and driver needs within the neighborhood object
        var hourlyArray = []; //turns into this.Values.
        //Daily totals: as you go through the loop, add the hourly pizza, deliveries, and drivers for each location.
        //initialize to 0.
        var pizzaTotal = 0;
        var deliveryTotal = 0;
        var driverTotal = 0;
      };
      initializeTotal();

    //inner loop generates the countPizza, countDelivery, and countDriver by iterating through 18 hours of operation.
      for(j = 0; j < hours.length; j++){
          //Look through six scenarios for the varying shifts

          //8am to 10am
        if(j < 3){ //TODO you need a third index because each neighborhood is in its own array. Check the index for positions.
          minPizza = demandArray[i][0][0];
          maxPizza = demandArray[i][0][1];
          minDelivery = demandArray[i][0][2];
          maxDelivery = demandArray[i][0][3];
          //11am to 1pm
        } else if (j < 6){
          minPizza = demandArray[i][1][0];
          maxPizza = demandArray[i][1][1];
          minDelivery = demandArray[i][1][2];
          maxDelivery = demandArray[i][1][3];
        //2pm to 4pm
        } else if (j < 9){
          minPizza = demandArray[i][2][0];
          maxPizza = demandArray[i][2][1];
          minDelivery = demandArray[i][2][2];
          maxDelivery = demandArray[i][2][3];
            //5pm to 7pm
        } else if (j < 12){
          minPizza = demandArray[i][3][0];
          maxPizza = demandArray[i][3][1];
          minDelivery = demandArray[i][3][2];
          maxDelivery = demandArray[i][3][3];
          //8pm to 10pm
        } else if (j < 15){
          minPizza = demandArray[i][4][0];
          maxPizza = demandArray[i][4][1];
          minDelivery = demandArray[i][4][2];
          maxDelivery = demandArray[i][4][3];
          //11pm to 2am
        } else {
          minPizza = demandArray[i][5][0];
          maxPizza = demandArray[i][5][1];
          minDelivery = demandArray[i][5][2];
          maxDelivery = demandArray[i][5][3];
        }//end else
        //create a dummy object to equal the output of getValues.
        var singleHour = getValues(minPizza, maxPizza, minDelivery, maxDelivery);

        //each neighborhood will have an array of 18 sets (pizza, delivery, driver)
        //push to the array that stores the object for each hour's value
        hourlyArray.push(singleHour);
        //var pizzeriaValues = getValues(minPizza, maxPizza, minDelivery); //add property to pizzeria object.
          //the above line also runs getValues and returns an object

          //use dummy.key to add a value to pizzaTotal, deliveryTotal, and driverTotal.
        pizzaTotal += singleHour.countPizza;
        deliveryTotal += singleHour.countDelivery;
        driverTotal += singleHour.countDriver;
        //hourStats[i].Values;////////////I don't think i need this?
          //update the value for the hourValues key (hourStats)

      }//end inner for loop
    //add properties to the object.
    this.Values = hourlyArray; //create another property for total pizzas
    this.totalPizza = pizzaTotal; //create another property for total deliveries
    this.totalDelivery = deliveryTotal; //create another property for total drivers
    this.totalDriver = driverTotal; //push the neighborhood object to an array

    finalArray.push(pizzeria);
  }//end outer for loop
  console.table(finalArray);
  return finalArray; //array of pizzeria objects.
} //end storeValues
}; //end object constructor function
