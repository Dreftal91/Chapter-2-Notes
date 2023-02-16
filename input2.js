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

//number 9

let number1 = Number(readLine.question("Choose a number: "));
let number2 = Number(readLine.question("Choose another number: "));
console.log(`${number1} divided by ${number2} is ${number1/number2} and the remainder is ${number1%number2}`);

//number 10

let numnum1 = Number(readLine.question("Choose a number: "));
let numnum2 = Number(readLine.question("Choose another number: "));
if (numnum1 > numnum2) {
    console.log(`${numnum1} is bigger than ${numnum2}`)
} else if (numnum1 < numnum2) {
    console.log(`${numnum2} is bigger than ${numnum1}`)
}

//number 11

let numnumnum1 = Number(readLine.question("Choose a number: "));
let numnumnum2 = Number(readLine.question("Choose another number: "));
if (numnumnum1 < numnumnum2) {
    console.log(`${numnumnum1} is smaller than ${numnumnum2}`)
} else if (numnumnum1 > numnumnum2) {
    console.log(`${numnumnum2} is smaller than ${numnumnum1}`)
}

//number 12


let numnumeins = Number(readLine.question("Choose a number: "));
let numnumzwei = Number(readLine.question("Choose another number: "));
let num12quo = numnumeins/numnumzwei
let decimalplaces = Number(readLine.question("To how many decimal places do you want to round?: "));
if (decimalplaces == 1) {
    console.log(`The quotient of those two numbers is ${(num12quo).toFixed(1)}`);
} else if (decimalplaces == 2) {
    console.log(`The quotient of those two numbers is ${(num12quo).toFixed(2)}`);
} else if (decimalplaces == 3) {
    console.log(`The quotient of those two numbers is ${(num12quo).toFixed(3)}`);
} else if (decimalplaces == 4) {
    console.log(`The quotient of those two numbers is ${(num12quo).toFixed(4)}`);
} else if (decimalplaces == 5) {
    console.log(`The quotient of those two numbers is ${(num12quo).toFixed(5)}`);
} else if (decimalplaces == 6) {
    console.log(`The quotient of those two numbers is ${(num12quo).toFixed(6)}`);
}