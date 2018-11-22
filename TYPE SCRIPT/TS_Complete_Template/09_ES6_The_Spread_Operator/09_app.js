/*
---------------------------------------------------------------------------------
 7. The Spread Operator
---------------------------------------------------------------------------------
This is looks like var arg method in java but this is more than that.

In this, an array can be expanded and pass it as arguments to an another function which
Accepts '0' or more number of arguments as values.

*/
var array1 = [20, 30, 40];
var array2 = [10].concat(array1, [50, 60, 70]);
console.log("array2 : " + array2);
var values = [307, 784, 45, 58, 85];
var minValue = Math.min.apply(Math, values);
console.log("minvalues : " + minValue);
//SpreadOperator is used to create a new copy of an array
var cars1 = ['Audi', 'BMW', 'Rangerover', 'Baleno '];
var cars2 = cars1.slice(); //create a new copy
var cars22 = cars1.slice(); //Craeates a new copy
if (cars1 === cars2) {
    console.log('both are equal');
}
else {
    console.log('both are not Equal');
}
