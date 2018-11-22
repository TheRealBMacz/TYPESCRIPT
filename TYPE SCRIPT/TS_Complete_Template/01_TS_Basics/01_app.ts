// Hello World App
let greeting:string="good morning";
console.log(greeting);
document.querySelector('#display').textContent=greeting;

// Variables Creation in TypeScript
function greetMessage(name:string,age:number):string{
    let greeting:string="hello"+name+"you are"+age+"years old!";
    return greeting;
}
let greetingMessage:string=greetMessage('john',40);
console.log(greetingMessage);
document.querySelector('#display').textContent=greetingMessage;