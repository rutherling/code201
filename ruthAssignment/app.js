// Code 201 Day 02
// Ruth assignment submission

//Ask three questions
alert('Pop quiz! How well do you know Ruth? Answer this first question with y or n.');

var askAgain = true;

//Ask about climate preferences. Evaluate Y/N.
while (askAgain) {
  var answerClimate = prompt('When choosing a home city, is climate important to me?');
  console.log('User asssumption about climate preference: ' + answerClimate);

  if (answerClimate.toLowerCase() === 'n' || answerClimate.toUpperCase() === 'N') {
    alert('Actually, I really like temperatures between 30 and 90 degrees Fahrenheit.');
    askAgain = false;
    console.log('Value askAgain: ' + askAgain);
  } else if (answerClimate.toLowerCase() === 'y' || answerClimate.toUpperCase() === 'Y') {
    alert('YES I love nice (30 - 90 degrees Fahrenheit) weather.');
    askAgain = false;
  } else {
    alert('Hey, that\'s not y or n! Guess again ;)');
  }

}

//Ask about target career field

var answerCareer = prompt('What is my target career field?');
console.log('User guess on taret career field: ' + answerCareer);
if(answerCareer.toLowerCase() === 'business analytics' || answerCareer.toUpperCase() === 'BUSINESS ANALYTICS'){
  alert('YES I love data, and I want to help customers feel in control of their decisions and evaluate strategy.');
} else {
  alert('Not really, I\'m much more interested in business analytics.');
}

//Ask about skills

var answerCompetence = prompt('Am I a competent developer?');
console.log('User opinion on my competence: ' + answerCompetence);
alert('Thanks for that vote of confidence ;) There is always more room to grow!');

//Stretch requirement: evaluate numeric input for too high or low
alert('Now we\'ll get to even trickier questions... Pay close attention!');

var keepAsking = true;

while(keepAsking){
  var answerTemperature = prompt('In Fahrenheit degrees, what is a comfortable temperature for me?');
  if(answerTemperature > 30 && answerTemperature < 90){
    alert('That\'s right! Way to go!');
    keepAsking = false;
  } else if (answerTemperature > 90){
    alert('Feelin\' hot hot hot! Guess again!');
  } else {
    alert('BRRR! That is too cold for me, guess again!');
  }
}
console.log('Correct temperature input: ' + answerTemperature);

//Stretch requirement: answer with multiple correct options
