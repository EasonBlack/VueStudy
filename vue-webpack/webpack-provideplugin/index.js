var multiply = require('./multiply');
var sum = require('./sum');


var totalMultiply = multiply(5, 3);
var totalSum = sum(5, 3);

let a = $('<div></div>');
console.log(a);

console.log('Product of 5 and 3  == ' + totalMultiply);
console.log('Sum of 5 and 3 = ' + totalSum);