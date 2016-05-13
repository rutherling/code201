// Code 201 Day 04
// Ruth assignment submission

//user enters site: ask their name so you can personalize their quiz score.
var userName = prompt('Hi! What\'s your name?');

//display username on Game page
var zname = document.getElementById('zname');
zname.textContent = userName;

//create a variable to keep track of user's score
var score = 0;

//array of questions, answers, and auto responses on page
var game = [
  //Question1
  ['When choosing a home city, is climate important to me? Answer Y or N.', ['y','n'], ['Actually, I really like temperatures between 30 and 90 degrees Fahrenheit.',
  'YES I love weather between 30 - 90 degrees Fahrenheit.','Hey, that is not y or n! Guess again.']],
  //Question2
  ['What is my target career field?', ['business analytics'], ['YES I love data, and I want to help customers feel in control of their decisions and evaluate strategy.', 'Not really, I am much more interested in business analytics.']],
  //Question3
  ['Am I a competent developer?', 'Thanks for that vote of confidence \:\) There is always more room to grow!'],
  //Question4
  ['In Fahrenheit degrees, what is a comfortable temperature for me?', ['Enter a number. Remember this is \'Murica, and we use Fahrenheit degrees! Ex: 99', 'That\'s right! Way to go!', 'Feelin\' hot hot hot! Guess again!', 'BRRR! That is too cold for me, guess again!']],
  //Question5
  ['Where do I call home?', ['Portland', 'Chicago', 'San Antonio'], ['Yes! I have lived there, and it feels like home.', 'No, that\'s not where my heart is. Try again!']]
];

//Ask questions with functions
question1();
question2();
question3();
question4();
question5();

//QUESTION 1: Ask about climate preferences. Evaluate Y/N. Passed testing.
function question1(){
  console.log('question1 function is running.');
  console.log('askAgain: ' + askAgain);
  var askAgain = true;
  while (askAgain) {
    console.log('Started while loop.');
    var answerClimate = prompt(game[0][0]);
    console.log('User asssumption about climate preference: ' + answerClimate);

    if (answerClimate.toLowerCase() === 'n' || answerClimate.toUpperCase() === 'N') {
      var wrong1 = document.getElementById('auto1');
      wrong1.textContent = game[0][2][0];
      askAgain = false;
      console.log('Value askAgain: ' + askAgain);
    } else if (answerClimate.toLowerCase() === 'y' || answerClimate.toUpperCase() === 'Y') {
      var right1 = document.getElementById('auto1');
      right1.textContent = game[0][2][1];
      askAgain = false;
      score += 1;
    } else {
      alert('Hey, that\'s not y or n! Guess again ;)');
    }
    var answer1 = document.getElementById('climate');
    climate.textContent = answerClimate;
  }
};

//QUESTION 2: Ask about target career field
function question2(){
  var answerCareer = prompt(game[1][0]);
  //Log their answer and display it on the page.
  console.log('User guess on taret career field: ' + answerCareer);
  var field = document.getElementById('field');
  field.textContent = answerCareer;

  //check if answer is correct, give them a point if yes.
  if(answerCareer.toLowerCase() === game[1][1] || answerCareer.toUpperCase() === game[1][1]){
    var answer2 = document.getElementById('auto2');
    answer2.textContent = game[1][2][0];
    score += 1;
  } else {
    var answer2 = document.getElementById('auto2');
    answer2.textContent = game[1][2][1];
  }
};

//QUESTION 3: Ask about skills
function question3(){
  var answerCompetence = prompt(game[2][0]);
  console.log('User opinion on my competence: ' + answerCompetence);
  var confidence = document.getElementById('confidence');
  confidence.textContent = answerCompetence;
  var auto3 = document.getElementById('auto3');
  auto3.textContent = game[2][1];
}

//QUESTION 4: evaluate numeric input for too high or low
function question4(){
  var keepAsking = true;
  while(keepAsking){

    var answerTemperature = prompt(game[3][0]);
    var comfort = document.getElementById('comfort');
    comfort.textContent = answerTemperature;

    console.log('User entered: ' + answerTemperature + ' degrees F');
    if (isNaN(answerTemperature)){
      var auto4 = document.getElementById('auto4');
      auto4.textContent = game[3][1][0];
    } else {
      if(answerTemperature > 30 && answerTemperature < 90){
        var auto4 = document.getElementById('auto4');
        auto4.textContent = game[3][1][1];
        score += 1;
        keepAsking = false;
      } else if (answerTemperature > 90){
        var auto4 = document.getElementById('auto4');
        auto4.textContent = game[3][1][2];
      } else {
        var auto4 = document.getElementById('auto4');
        auto4.textContent = game[3][1][3];
      }
    } //else
    console.log('Continue looping through temperature question? ' + keepAsking);
  } //while
  console.log('Correct temperature input: ' + answerTemperature);
}; //question4 function

function question5(){
//QUESTION 5: answer with multiple correct options
  var correctCity = prompt(game[4][0]);
  var home = document.getElementById('home');
  home.textContent = correctCity;

  var wrong = true;
  while (wrong){
    //I don't remember what this used to do: var guessCity = prompt(game[4][0]);

    for (var i = 0; i < game[4][1].length; i++){
      if(correctCity === game[4][1][i]){
        wrong = false;
        var auto5 = document.getElementById('auto5');
        auto5.textContent = game[4][2][0];
        score += 1;
      }
    }

    if(wrong){
      var auto5 = document.getElementById('auto5');
      auto5.textContent = game[4][2][1];
    }
    console.log('Correct city guess: ' + correctCity);
  }
};
console.log('User quiz score: ' + score);
//Thank the user, tell them their score, end quiz
alert('Thanks, ' + userName + ', that\'s the end of the quiz. You scored ' + score + ' out of 5. Hopefully you know me a little bit better now.');
