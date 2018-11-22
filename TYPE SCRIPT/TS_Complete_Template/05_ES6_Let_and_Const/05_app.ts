/*
---------------------------------------------------------------------------------
 3. Let & Const
---------------------------------------------------------------------------------
 This 'let' is an ES6 Feature to declare variables like 'var' in javascript.

*/

// Usage of let vs Var inside for loop created variables
 for(var i=0;i<=10;i++){}
console.log(i);
for(let j=0;j<=10;j++ ){}
//console.log(j);


// Usage of let vs var inside if block
var model='BMW';
if(model==='BMW'){
    var color1='RED';
}
console.log(color1);
if(model==='BMW'){
    let color2='black';
}
//console.log(color2);//we cannot asses clr2



// Usage Const variable creation
const APP_NAME='TS APP';
//APP_NAME='JS APP';
