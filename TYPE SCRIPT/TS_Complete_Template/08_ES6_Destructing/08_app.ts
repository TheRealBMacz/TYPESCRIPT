/*
---------------------------------------------------------------------------------
 6. Destructing
---------------------------------------------------------------------------------
This is one of the powerful feature in ES6, where in instead of adding a single value
to a variable from an array, we can do it all by once.
*/

// Usage of Destructing to assign each variable of an array to other vars
let student  = ['Rajan',20,'Engineering'];

/*
let sName = student[0];
let sAge = student[1];
let sCourse = student[2];
*/

let [sName , sAge , sCourse]  = student;
console.log(`Name : ${sName} Age : ${sAge} Course : ${sCourse}`);

// Usage of Destructing to exchange the values of two vars
let a = 10;
let b = 20;
[a,b] = [b,a];
console.log(`a: ${a} b:${b}`);
// Usage of Destructing to assign each variable of an Object to other vars
    let phone = {
        mfg : 'samsung' ,
        ram  :'5Gb',
        display : '5inch'
    };

    let phone_mfg = phone.mfg;
    let phone_ram = phone.ram;
    let phone_display = phone.display;

    console.log(`Mfg : ${phone_mfg} RAM : ${phone_ram} Display : ${phone_display}`);

    //Another Method
    let { mfg : phone_mfgg,
      ram : phone_ramm ,
      display : phone_displayy
    } = phone;
console.log(`Mfg : ${phone_mfgg} RAM : ${phone_ramm} Display : ${phone_displayy}`);





// Best usage is to exchange the value btw a & b