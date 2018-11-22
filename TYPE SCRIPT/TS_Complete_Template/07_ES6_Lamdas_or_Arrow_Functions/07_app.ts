/*
---------------------------------------------------------------------------------
 5. Lambdas (Arrow Functions)
---------------------------------------------------------------------------------
A lambda expression is an anonymous function that you can use to create
delegates or expression tree types. By using lambda expressions,
you can write local functions that can be passed as arguments or
returned as the value of function calls

*/

// Normal No-args function , same Arrow Function
    let greetNormal = function () {
        return "Good Morning";
    };
    console.log(greetNormal());

    //Arrow function 1
    let greetArrow = () => "Good Morning";
    console.log(greetArrow());

    //Normal function 2
    let greetMeNormal = function (name) {
        return `Good Morning ${name}`;
    };
    console.log(greetMeNormal('john'));

    //another One
            let greetMeArrow = (name) => `Good Morning ${name}`;
            console.log(greetMeArrow('William'));

    //Normal Function3

    let sumNormal = function (a , b) {
        return a+b;
    };
    console.log(`thesum of a,b is : ${sumNormal(20,20)}`);

    let sumArrow = (a ,b) =>(a + b);
    console.log(`The sum of a,b is:${sumNormal(10,20)}`);

// Normal function with Args and Arrow Function


// Normal function to find the sum of two numbers with Arrow Function

// Normal function to find the length of an array with Arrow Function


// Create an array with the length of each element of an array

let movies = ['Baahubali' , 'Dangal' , 'Drushyam'];

let movieLength = movies.map(function (movie) {
        return movie.length;
    }
);
console.log(movieLength);

// Arrow Function for the above example

let moviealengtArrow = movies.map((movie) => movie.length);
console.log(moviealengtArrow);
