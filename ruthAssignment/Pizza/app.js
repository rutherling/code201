//Array of demand behavior
//[time slot, min production, max production, min deliveries, max deliveries]
//I might not need this if I put hte max and min in the For loop.
var demand = [
  ['8am to 11am', 0, 4, 0, 4],
  ['11am to 2pm', 0, 7, 0, 4],
  ['2pm to 5pm', 2, 15, 1, 4],
  ['5pm to 8pm', 15, 35, 3, 8],
  ['8pm to 11pm', 12, 31, 5, 12],
  ['11pm to 2am', 5, 20, 5, 11]
];
console.table(demand);

var hours = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 0, 1, 2];
console.log('Hours of Operation: ' + hours);

//Array of pizza locations
var neighborhood = ['Hillsboro', 'Pearl', 'DowntownPDX', 'Buckman', 'PDXairport', 'Clackamas'];
console.log('Neighborhoods: ' + neighborhood);

//Function to return pizzas, deliveries, and drivers to be used for a specified range of hours
//Random generation of pizza's count, given min and max for that hour
function getValues(minPizza, maxPizza, minDelivery){ //intentionally did not include maxDelivery because
  //calcPizza is the delivery ceiling.
  var calcPizza = Math.floor(Math.random() * (maxPizza - minPizza + 1));
  console.log('Randomly generated pizzas this hour: ' + calcPizza);

//Use pizza's calc as delivery's max for that specific hour. Delivery min is in the array.
  var calcDelivery = Math.floor(Math.random() * (1 + calcPizza - minDelivery));
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
var dummy = getValues(0,4,0);
console.log(dummy);

//Function to push countPizza, countDelivery, and countDriver every hour, for each neighborhood
function storeValues(){
  //create empty array to store all the neighborhoods.
  var finalArray = [];

  //outer loop iterates through neighborhoods
  for(i = 0; i < neighborhood.length; i++){
    console.log('Outer loop started.');
    //create an object for each neighborhood pizzeria
    var pizzeria = {
      neighborhood: neighborhood[i],

    };//end define pizzeria object
      //push the neighborhood object to an array
    finalArray.push(pizzeria);
    //inner loop generates the countPizza, countDelivery, and countDriver by iterating through 18 hours of operation.
    for(j = 0; j < hours.length; j++){
      console.log('Inner loop started.');
        //create array to store the hourly production and driver needs within the neighborhood object
      var singleStats = [];

        //Look through six scenarios

        //8am to 10am
      if(j < 3){
        minPizza = demand[0][1];
        maxPizza = demand[0][2];
        minDelivery = demand[0][3];
        //11am to 1pm
      } else if (j < 6){
        minPizza = demand[1][1];
        maxPizza = demand[1][2];
        minDelivery = demand[1][3];
      //2pm to 4pm
    } else if (j < 9){
        minPizza = demand[2][1];
        maxPizza = demand[2][2];
        minDelivery = demand[2][3];
        //5pm to 7pm
      } else if (j < 12){
        minPizza = demand[3][1];
        maxPizza = demand[3][2];
        minDelivery = demand[3][3];
        //8pm to 10pm
      } else if (j < 15){
        minPizza = demand[4][1];
        maxPizza = demand[4][2];
        minDelivery = demand[4][3];
        //11pm to 2am
      } else {
        minPizza = demand[5][1];
        maxPizza = demand[5][2];
        minDelivery = demand[5][3];
      }//end else
      //each neighborhood will have an array of 18 sets (pizza, delivery, driver)
      //push to the array that stores the object for each hours value
      singleStats.push(getValues(minPizza, maxPizza, minDelivery));
      //var pizzeriaValues = getValues(minPizza, maxPizza, minDelivery); //add property to pizzeria object.
        //the above line also runs getValues and returns an object
        //push it to the array
      pizzeria.Values = singleStats;
      //hourStats[i].Values;////////////I don't think i need this?
        //update the value for the hourValues key (hourStats)

    }//end inner for loop
  }//end outer for loop
  console.table(finalArray);
}; //end storeValues

//run storeValues
storeValues();
