const readLine = require('readline-sync');

//number 1

// let a = 0;
// while (a < 26){
//     console.log(a);
//     a++;
// }

//number 2

// let b = 0;
// while (b < 51){
//     console.log(b);
//     b++;
// }

//number 3

// let c = -10;
// while (c < 11){
//     console.log(c);
//     c++;
// }

//number 4

// let d = 0;
// while (d > -51){
//     console.log(d);
//     d--;
// }

//number 5

// let e = 0;
// while (e < 101){
//     if (e % 2 == 0){
//         console.log(e);
//     }
//     e++;
// }

// //number 6
//
// let f = 100;
// while (f >= 1){
//     if (f % 2 == 1){
//         console.log(f);
//     }
//     f--;
// }

//number 7

// let g = 0;
// while (g <= 100){
//     if (g % 3 == 0) {
//         console.log(g)
//     }
//     g++
// }

//number 8

// let h = 0;
// while (h <= 1000){
//     if (h % 5 == 0) {
//         console.log(h)
//     }
//     h++
// }

//number 9

// let i = 0;
// while (i <= 100) {
//     if (i < 10) {
//         console.log(i)
//     } else if (i > 25) {
//         console.log(i)
//     }
//     i++;
// }

//number 10

// let j = 0;
// while (j <= 100) {
//     if (j < 10) {
//         console.log(j)
//     } else if (j > 20 && j < 40) {
//         console.log(j)
//     } else if (j > 50) {
//         console.log(j)
//     }
//     j++;
// }

//number 11

// let quit = readLine.question("Do you want to quit?: ");
// while (quit != "Y" && quit != "N") {
//     console.log("Invalid answer.");
//     quit = readLine.question("Try again. Do you want to quit?: ");
// }
// console.log("Ok!");
// return;

//number 12

// let quit = readLine.question("Do you want to quit?: ");
// while (quit != "Y" && quit != "N" && quit != "y" && quit != "n") {
//     console.log("Invalid answer.");
//     quit = readLine.question("Try again. Do you want to quit?: ");
// }
// console.log("Ok!");
// return;

//number 13

// let ABC = readLine.question("Choose A, B, or C: ");
// while (ABC != "A" && ABC != "B" && ABC != "C") {
//     console.log("Invalid answer.");
//     ABC = readLine.question("Try again: ");
// }
// console.log("Ok!");
// return;

//number 14

// let one23 = readLine.question("Choose 1, 2, or 3: ");
// while (one23 != "1" && one23 != "2" && one23 != "3") {
//     console.log("Invalid answer.");
//     one23 = readLine.question("Try again: ");
// }
// console.log("Ok!");
// return;

//number 15

// let one23 = readLine.question("How many sodas do you want bro?\nChoose 0-10\n: ");
// while (one23 > 10) {
//     console.log("Invalid answer.");
//     one23 = readLine.question("Try again, choose a number between 0 to 10: ");
// }
// while (one23 < 0) {
//     console.log("Invalid answer.");
//     one23 = readLine.question("Try again, choose a number between 0 to 10: ");
// }
// console.log("Ok!");
// return;

//number 16

// let numberquiz = readLine.question("Enter a positive number: ");
// while (numberquiz <= 0) {
//     console.log("Invalid answer.");
//     numberquiz = readLine.question("Try again, choose a positive number: ");
// }

//number 17

// let negnumberquiz = readLine.question("Enter a negative number: ");
// while (negnumberquiz >= 0) {
//     console.log("Invalid answer.");
//     negnumberquiz = readLine.question("Try again, choose a negative number: ");
// }

//number 18

// let evennumberquiz = readLine.question("Enter an even number: ");
// while (evennumberquiz % 2 != 0) {
//     console.log("Invalid answer.");
//     evennumberquiz = readLine.question("Try again, choose an even number: ");
// }

//number 19

// let one23 = readLine.question("How many sodas do you want bro?\nChoose 0-10 or 20-30\n: ");
// while (one23 > 10 && one23 < 20 || one23 >= 30) {
//     console.log("Invalid answer.");
//     one23 = readLine.question("Try again, choose a number between 0 to 10 or 20-30: ");
// }
// while (one23 < 0) {
//     console.log("Invalid answer.");
//     one23 = readLine.question("Try again, choose a number between 0 to 10 or 20-30: ");
// }

//number 20
//
// let month = readLine.question("Choose a month (by number) to know how many days are in that month: ");
// while (month < 1 || month > 12)
// {
//     console.log("Invalid answer.");
//     month = readLine.question("Try again, choose a month (by number) to know how many days are in that month: ");
// }
// if (month == 4 || month == 6 || month == 9 || month == 11) {
//     console.log("That month has 30 days!")
// }else if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
//     console.log("That month has 31 days!")
// }else if (month == 2) {
//     console.log("That month has 28 days!")
// }