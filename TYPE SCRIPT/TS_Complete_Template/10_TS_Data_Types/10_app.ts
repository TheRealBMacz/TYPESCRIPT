/*
-----------------------------------------------------------------------------------------
   Variable Declarations in TypeScript and Usage
-----------------------------------------------------------------------------------------
 */

/*

    Boolean DataType

The most basic data type is the simple true/false value,
which JavaScript and TypeScript call a boolean value.

*/

 //BOOLEAN
    let isTsEasy:boolean = true;
    console.log(`isTsEasy : ${isTsEasy}`);

    //String
    let tsAuthor:String = 'Microsoft';
    console.log(`Ts Author : ${tsAuthor}`);

    //Number
    let tsVersion :number = 3.0;
    console.log(`Ts Version : ${tsVersion}`);

    //Any
    let test:any =10;
    console.log(`Test : ${test}`);

    test = true;
    console.log(`Test : ${test}`);

    //Array

    let languages:Array<string> = ['HTML' , 'CSS' , 'JS'];
    console.log(`languages : ${languages}`);

    //Enum
    enum Month{
        JAN = 'JANUARY' ,
        FEB = 'FEBUARY'
    }
    console.log(`JAN : ${Month.JAN}`); //January

  //month.JAN ='JANUARY" ;Cannot reasign bcoz its enum

//void ->No return Value

function greet(name:string):void{
    console.log(`good morning: ${name}`);
}
    greet('John');


    //

/*

    Number DataType

    As in JavaScript all the numbers in TypeScript are also Floating point numbers.
    In addition to hexadecimal and decimal literals, TypeScript also
    supports binary and octal literals introduced in ECMAScript 2015.
    decimal, hex = 0x , binary = 0b , octal = 0o.
*/



/*
String Data type

 This is one of the commonly used datatype for textual data of any length,
 we may use with "" or ''
 */


// You can also use template strings, which can span multiple lines and have embedded expressions.



/*
    Array DataType

    An array is an indexed collection of values
    we can define multiple values with single variable name array
    we can use them like number[] or Array<number>
 */


/*

  Enum DataType

   enums are used to define a collection of constant values
    enums values once declared ,  they cannot be modified
 */


/*
    Any DataType

    This datatype accepts any types of data as a value to variables
 */


/*
    Void Data Type
    This is quite opposite to any datatype
    this may commonly used with function where no return types
 */
