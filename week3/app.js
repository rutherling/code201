//Callback function "click" event listenr on each image.
//The callback should change the image file that is rendered inside the <img> element.
//When the user clicks an image, it changse to a different image.

var leftImage = document.getElementbyId('leftImage');
var rightImage = document.getElementbyId('rightImage');

function changeImage(){
//similar to textContent, but with image content, replace the image with a different one from img directory.
  leftImage.src = 'img/crazy-inventions-30.jpg';
  rightImage.src = 'img/funny-inventions.jpg';
};

// leftImage.onclick.changeImage;
// rightImage.onclick.changeImage;
//
//Failed testing:
leftImage.addEventListener('click', changeImage);
rightImage.addEventListener('click', changeImage);
//   // querySelector('leftImage');
