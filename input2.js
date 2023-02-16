const readLine = require('readline-sync');

//number 1

let num1 = Number(readLine.question("Choose a number: "));
let num2 = Number(readLine.question("Choose another number: "));
console.log(`The sum of those two numbers is ${num1+num2}`);

//number 2

let numone = Number(readLine.question("Choose a number: "));
let numtwo = Number(readLine.question("Choose another number: "));
console.log(`The difference of those two numbers is ${numone-numtwo}`);

//number 3

let numuno = Number(readLine.question("Choose a number: "));
let numdos = Number(readLine.question("Choose another number: "));
console.log(`The product of those two numbers is ${numuno*numdos}`);

//number 4

let numeins = Number(readLine.question("Choose a number: "));
let numzwei = Number(readLine.question("Choose another number: "));
console.log(`The quotient of those two numbers is ${numeins/numzwei}`);

//number 5

let numI = Number(readLine.question("Choose a number: "));
let numII = Number(readLine.question("Choose another number: "));
console.log(`The remainder of those two numbers is ${numI%numII}`);

//number 6

let Name = readLine.question("Enter Name: ");
let Lastname = readLine.question("Enter Lastname: ");
console.log(`Welcome! ${Name+" "+Lastname}`);

//number 7

let Title = readLine.question("Enter Your Title (i.e: Mr., Mrs., etc)\n: ");
let Suffix = readLine.question("Enter Your Suffix (i.e: Jr., PhD., etc)\n: ");
console.log(`Welcome! ${Title+" "+Lastname+" "+Suffix}`);

//number 8

console.log("Let's make you a mailing label!");
let streetnumber = readLine.question("What is your street number?: ");
let streetname = readLine.question("What is your street name?: ");
let streettype = readLine.question("What is your street type?: ");
let city = readLine.question("What is your city?: ");
let state = readLine.question("What is your state?: ");
let zipcode = readLine.question("What is your zipcode?: ");
console.log(`Your mailing label is\n${streetnumber+" "+streetname+" "+streettype+", "+city+", "+state+" "+zipcode}`);