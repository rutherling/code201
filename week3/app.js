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
    //make the buttons visible. Why didn't gebi('button') work? display:none?
    var outcome = gebi('outcome');
    outcome.style['visibility'] = 'visible';
    outcome.addEventListener('click', showCanvas);//end event listener. I wrote "drawCanvas" function.

    var plot = gebi('visual');
    plot.style['visibility'] = 'visible'; //show the div containing canvas drawing

    var voteAgain = gebi('voteAgain');
    voteAgain.style['visibility'] = 'visible';

    var newRound = gebi('newRound');
    newRound.style['visibility'] = 'visible';

    var container = gebi('imagesContainer'); //I need a way to leave the function so refreshImage stops running?
    container.style['display'] = 'none'; //doesn't work yet.
  }//end if for Nclicks comparison to 16.

  NclicksArray(); //run function inside refreshImage(), but keep the return value in a global variable.
} //end refreshImage

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
  console.log('countClick: ' + countClick);
  return countClick; //returns blank, so you need to run the function each time you increment Nclicks.
}//end NclicksArray

function NshownArray(){
  var countShown = [];
  for (var i = 0; i < images.length; i++) {
    countShown.push(images[i].Nshown);
  }
  console.log('countShown: ' + countShown);
  return countShown; //returns blank, so you need to run the function each time you increment Nclicks.
}//end NshownArray

function percents (num, den){
  var percentArray = [];
  for (var i = 0; i < num.length; i++) {
    if (den[i] === 0) {
      var percent = 0;
    } else{
      var percent = (num[i] / den[i]);
      percent = percent.toFixed(3); //not sure if this works?
    }
    percentArray.push(percent);
  }
  return percentArray;
}//end percents function

function showCanvas(){
  var clickCount = NclicksArray(); //run global function NclicksArray.
  var showCount = NshownArray();
  var percentArray = percents(clickCount, showCount);

  function drawCanvas (displayNames, clickCount, showCount, percentArray){ //displayNames is global array.
    var canvas = document.getElementById('canvas');
    var myChart = new Chart(canvas, {
      type: 'bar',
      data: {
        labels: displayNames,
        datasets: [{
          label: 'Count Voted',
          data: clickCount
        },
          {
            type: 'bar',
            label: 'Count Shown',
            data: showCount,
            //indexLabel: "{what is this?}"
          }
      ]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero:true
            }
          }]
        }
      }
    });
    var canvas2 = document.getElementById('canvas2');
    var myChart = new Chart(canvas2, {
      type: 'bar',
      data: {
        labels: displayNames,
        datasets: [{
          label: 'Percent Clicked',
          data: percentArray
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero:true
            }
          }]
        }
      }
    });
  } //end drawCanvas
  drawCanvas(displayNames, clickCount, showCount, percentArray);
  console.log('ShowCanvas ran.');
  //console.log('test + ' test);
}//end showCanvas
