//Callback function "click" event listenr on each image.
//The callback should change the image file that is rendered inside the <img> element.
//When the user clicks an image, it changse to a different image.

//shortcut for "getElementById"
function gebi(id) {
  return document.getElementById(id);
}
//image directory
var imgNames = ['beardBeanie',
                'boyfriendPillow',
                'cornerFrame',
                'ctrlAltDel',
                'domeUmbrella',
                'girlfriendPillow',
                'pingpongDoor',
                'pizzaScissors',
                'slippersLED',
                'travelPillow'];

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
  this.ident = src;
  this.src = 'img/' + src + '.jpg';
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
    var newTD = document.createElement('td');
    var tableRow = gebi(images[leftImage.imageIdx[0]].ident);
    console.log('tableRow: ' + tableRow.id);
    tableRow.appendChild(newTD);
    //fails testing, append of null.
    //repeat for center and right images
    break;

  case 'centerImage':
    images[rightImage.imageIdx[1]].incrementClicks();
    break;

  case 'rightImage':
    images[centerImage.imageIdx[2]].incrementClicks();
    break;
  }

  var s = 'click counts: ';
  images.map(function(ele) { s += ele.Nclicks + ', '; });
  //console.log(s);

  showNewImage(getRandomInt());
  //For loop OR MAP METHOD to aggregate NClicks for each image object.
  var cc = 0;
  //map over the array.
  images.map(function(sum){cc += sum.Nclicks;}); //I think this will look through all the image objects in images[] and add .NClicks together.
  console.log('sum images.Nclicks: ' + cc);
  //Compare NClicks to 16.
  if (6 === cc) {
    //make the buttons visible
    var outcome = gebi('outcome');
    outcome.style['visibility'] = 'visible';
    var voteAgain = gebi('voteAgain');
    voteAgain.style['visibility'] = 'visible';

    var container = gebi('imagesContainer'); //I need a way to leave the function so refreshImage stops running?
    container.style['visiblity'] = 'hidden'; //doesn't work yet.
  }//end if for Nclicks comparison to 16.
} //end refreshImage

//Event Listener for when user clicks "Show Results" button
var plot = gebi('plot');
outcome.addEventListener('click', function(){
  plot.style['visibility'] = 'visible';
});
