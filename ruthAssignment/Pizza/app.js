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

var hours = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 0, 1, 2];

//Array of pizza locations
var neighborhood = ['Hillsboro', 'Pearl', 'DowntownPDX', 'Buckman', 'PDXairport', 'Clackamas'];

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
  return {
    countPizza: calcPizza,
    countDelivery: calcDelivery,
    countDriver: calcDriver
  };
}
getValues(0,8,4);
