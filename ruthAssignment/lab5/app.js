//Global variable declarations
var p1Output = document.getElementById('p1');
var p2Output = document.getElementById('p2');
var p3Output = document.getElementById('p3');
var p4Output = document.getElementById('p4');
var p5Output = document.getElementById('p5');

//Text Insertion
p1Output.textContent = 'The sum of 147 and 256 is ' + sum(147,256) + '.';
p2Output.textContent = 'the product of 147 and 256 is ' + multiply(147,256) + '.';
p3Output.textContent = 'The sum of 14, 147 and 256 is ' + sumAndMultiply(147,256,14)[0] + 'and the product of 14, 147 and 256 is ' + sumAndMultiply(147,256,14)[1] + '.';
p4Output.textContent = 'The sum of [147, 256, 0, 14] is ' + sumArray([147, 256, 0, 14]) + '.';
p5Output.textContent = 'The product of [147, 256, 2, 14] is ' + multiplyArray([147, 256, 2, 14]) + '.';
