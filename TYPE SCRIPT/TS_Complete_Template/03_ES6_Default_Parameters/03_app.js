/*
---------------------------------------------------------------------------------
    1. Default Parameters
---------------------------------------------------------------------------------
    This feature is to provide some default values to optional parameters.
    If any of the parameter is not supplied the program will be using this default
parameters
*/
// Create a function and provide few default parameters using ES6
function greet(name, age) {
    if (name === void 0) { name = 'mani'; }
    if (age === void 0) { age = 30; }
    var greetMsg = "good morning" + name + "you are" + age + "years old";
    return greetMsg;
}
var greeting = greet(); //we r giving dummy values in upside//
console.log(greeting);
document.querySelector('#display').textContent = greeting;
