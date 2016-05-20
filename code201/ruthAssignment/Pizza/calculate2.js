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
