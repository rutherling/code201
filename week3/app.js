//Callback function "click" event listenr on each image.
//The callback should change the image file that is rendered inside the <img> element.
//When the user clicks an image, it changse to a different image.

//shortcut for "getElementById"
function gebi(id) {
  return document.getElementById(id);
}
//image directory
var imgNames = [['beardBeanie','Beard Beanie'],
                ['boyfriendPillow', 'Boyfriend Pillow'],
                ['cornerFrame','Corner Frame'],
                ['ctrlAltDel','Computer Rescue Wand'],
                ['domeUmbrella', 'Dome Umbrella'],
                ['girlfriendPillow', 'Girlfriend Pillow'],
                ['pingpongDoor', 'Ping Pong Door'],
                ['pizzaScissors', 'Pizza Scissors'],
                ['slippersLED', 'LED Slippers'],
                ['travelPillow', 'Travel Pillow']
              ];

//This will be an array of objects, each one represents the image itself (not the div container).
var images = [];

//create a variable from DOM element for each image div so you can set the background-image url().
leftImage = gebi('leftImage');
rightImage = gebi('rightImage');
centerImage = gebi('centerImage');

//generate three random integers. ***extra credit if they are unique.
function getRandomInt() {
  var leftRandom = Math.floor(imgNames.length * Math.random());
  var centerRandom = Math.floor(imgNames.length * Math.random());
  var rightRandom = Math.floor(imgNames.length * Math.random());
  return [leftRandom, centerRandom, rightRandom];
}

function showNewImage(idx) { //accepts an array of indices to retrieve a image from imgNames[] for each div.
  //update the image in each of the three div s.
  leftImage.style['background-image'] = 'url("' + images[idx[0]].src + '")';
  leftImage.imageIdx = idx; // Store index of visible image
  centerImage.style['background-image'] = 'url("' + images[idx[1]].src + '")';
  centerImage.imageIdx = idx;
  rightImage.style['background-image'] = 'url("' + images[idx[2]].src + '")';
  rightImage.imageIdx = idx;

  //Increment all of their Nshown.
  images[idx[0]].incrementNshown();
  images[idx[1]].incrementNshown();
  images[idx[2]].incrementNshown();

  //log the count shown for each image. This should increment by 1 for each of the three images shown.
  var s = 'Show counts: ';
  images.map(function(ele) { s += ele.Nshown + ', '; });
  console.log(s);
} //end showNewImage([left, center, right]);

function Image(src) { //creates an array of image objects. pass in imgNames[i] as src.
  this.displayName = src[1];
  this.ident = src;
  this.src = 'img/' + src[0] + '.jpg';
  this.Nclicks = 0;
  this.Nshown = 0;
  this.incrementClicks = function() {
    this.Nclicks++;
  }; //end incrementClicks method
  this.incrementNshown = function() {
    this.Nshown++;
  }; //end incrementNshown method.
} //end image constructor

for (var ii = 0; ii < imgNames.length; ii++) {
  var img = new Image(imgNames[ii]);
  images.push(img);
}//end for loop that creates image objects in the img array.

showNewImage(getRandomInt()); //run showNewImage. Index is set from getRandomInt.
console.log('leftImage.imageIdx = ' + leftImage.imageIdx);

leftImage.addEventListener('click', refreshImage); //event to listen for, function to run.
centerImage.addEventListener('click', refreshImage);
rightImage.addEventListener('click', refreshImage);

function refreshImage(e) {
  //only increment the one that gets clicked!
  var e = e.target.id;
  console.log('event target: ' + e);

  switch(e){
  case 'leftImage':
    images[leftImage.imageIdx[0]].incrementClicks();
    break;

  case 'centerImage':
    images[rightImage.imageIdx[1]].incrementClicks();
    break;

  case 'rightImage':
    images[centerImage.imageIdx[2]].incrementClicks();
    break;
  }

  var s = 'click counts: ';
  //For loop OR MAP METHOD to aggregate NClicks for each image object.
  images.map(function(ele) { s += ele.Nclicks + ', '; });
  //console.log(s);

  showNewImage(getRandomInt());

  var cc = 0;
  //map over the array.
  images.map(function(sum){
    cc += sum.Nclicks;
    return cc;
  }); //I think this will look through all the image objects in images[] and add .NClicks together.
  console.log('sum images.Nclicks: ' + cc);

  //Compare NClicks to 16.
  if (4 === cc) {
    //make the buttons visible
    var outcome = gebi('outcome');
    outcome.style['visibility'] = 'visible';
    var voteAgain = gebi('voteAgain');
    voteAgain.style['visibility'] = 'visible';

    var container = gebi('imagesContainer'); //I need a way to leave the function so refreshImage stops running?
    container.style['display'] = 'none'; //doesn't work yet.
  }//end if for Nclicks comparison to 16.
} //end refreshImage

//Event Listener for when user clicks "Show Results" button

outcome.addEventListener('click', draw);//end event listener. I wrote "drawCanvas" function.

//Array that matches src display names
function nameArray(){
  var displayNames = [];
  for (var i = 0; i < imgNames.length; i++) {
    displayNames.push(imgNames[i][1]);
  }//end for loop
  return displayNames;
}//end nameArray
var displayNames = nameArray();

//Array that matches images{.Nclicks}
function NclicksArray(){
  var countClick = [];
  for (var i = 0; i < images.length; i++) {
    countClick.push(images[i].Nclicks);
  }
  return countClick;
}
var countClick = NclicksArray(); //assign the return value to a variable.
//

//Function to create canvas
var productNames = [
  'Coke',
  'Pepsi',
  'Sprite',
  'Diet Coke',
//'Mercedez',
  'Orange Crush'];

// var body = document.body;
// console.log(body)
// Didn't work:
//   body.addEventListener('load', getRandomData);
// This did work:
//   body.addEventListener('click', getRandomData);

// Same as window.addEventListener(...)
addEventListener('load', drawRandomData);

function draw(numArray, pcntArray, labelArray) {
  var canvas = document.getElementById('canvas');

  // **Shamelessly** copied from Chart.js documentation
  var myChart = new Chart(canvas, {
    type: 'bar',
    data: {
      labels: labelArray,
      datasets: [{
        label: '# of Votes',
        data: numArray,
      },
        {
          type: 'line',
          label: 'votes/shown %',
          data: pcntArray
        }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: { beginAtZero:true }
        }]
      }
    }
  });
}

//draw(getRandomData());

function drawRandomData() {
  console.log('BLAAAAAH!');
  var data = [];
  var percents = [];
  for (var ii = 0; ii < productNames.length; ii++) {
    data.push(Math.ceil(Math.random() * 100));
    percents.push(Math.ceil(Math.random() * 100));
  }
  console.log(data);
  draw(data, percents, productNames);
}
//Function to draw canvas and show the parent container.
