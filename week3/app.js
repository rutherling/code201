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

var images = [];

leftImage = gebi('leftImage'); //creates a variable from DOM element, leftImage, so you can set the background-image url().

function getRandomInt() {
  return Math.floor(imgNames.length * Math.random()); // idx is a random integer
}

function showNewImage(idx) { //accepts an index to retrieve an image from imgNames[].
  leftImage.style['background-image'] = 'url("' + images[idx].src + '")';
  leftImage.imageIdx = idx; // Store index of visible image
  images[idx].incrementNshown();
  var s = 'Show counts: ';
  images.map(function(ele) { s += ele.Nshown + ', '; });
  console.log(s);
} //end .map to show the count of times the image has shown.

function Image(src) { //creates an array of image objects. pass in imgNames[i] as src.
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

function refreshImage() {
  images[leftImage.imageIdx].incrementClicks();
  var s = 'click counts: ';
  images.map(function(ele) { s += ele.Nclicks + ', '; });
  console.log(s);

  showNewImage(getRandomInt());
  // Can use dot notation ("width" doesn't contain a dash)
}
