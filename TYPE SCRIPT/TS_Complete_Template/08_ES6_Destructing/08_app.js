/*
---------------------------------------------------------------------------------
 6. Destructing
---------------------------------------------------------------------------------
This is one of the powerful feature in ES6, where in instead of adding a single value
to a variable from an array, we can do it all by once.
*/
// Usage of Destructing to assign each variable of an array to other vars
var student = ['Rajan', 20, 'Engineering'];
/*
let sName = student[0];
let sAge = student[1];
let sCourse = student[2];
*/
var sName = student[0], sAge = student[1], sCourse = student[2];
console.log("Name : " + sName + " Age : " + sAge + " Course : " + sCourse);
// Usage of Destructing to exchange the values of two vars
var a = 10;
var b = 20;
_a = [b, a], a = _a[0], b = _a[1];
console.log("a: " + a + " b:" + b);
// Usage of Destructing to assign each variable of an Object to other vars
var phone = {
    mfg: 'samsung',
    ram: '5Gb',
    display: '5inch'
};
var phone_mfg = phone.mfg;
var phone_ram = phone.ram;
var phone_display = phone.display;
console.log("Mfg : " + phone_mfg + " RAM : " + phone_ram + " Display : " + phone_display);
//Another Method
var phone_mfgg = phone.mfg, phone_ramm = phone.ram, phone_displayy = phone.display;
console.log("Mfg : " + phone_mfgg + " RAM : " + phone_ramm + " Display : " + phone_displayy);
var _a;
// Best usage is to exchange the value btw a & b 
