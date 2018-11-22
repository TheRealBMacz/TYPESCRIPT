// Hello World App
var greeting = "good morning";
console.log(greeting);
document.querySelector('#display').textContent = greeting;
// Variables Creation in TypeScript
function greetMessage(name, age) {
    var greeting = "hello" + name + "you are" + age + "years old!";
    return greeting;
}
var greetingMessage = greetMessage('john', 40);
console.log(greetingMessage);
document.querySelector('#display').textContent = greetingMessage;
