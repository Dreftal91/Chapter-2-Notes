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

let quit = readLine.question("Do you want to quit?: ");
while (quit != "Y" && quit != "N" && quit != "y" && quit != "n") {
    console.log("Invalid answer.");
    quit = readLine.question("Try again. Do you want to quit?: ");
}
console.log("Ok!");
return;

