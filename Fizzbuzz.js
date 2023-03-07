const readLine = require('readline-sync');
// for (let fizzbuzz = 0; fizzbuzz <= 100; fizzbuzz++){
//     if (fizzbuzz % 3 == 0 && fizzbuzz % 5 == 0) {
//         console.log("Fizzbuzz");
//     } else if (fizzbuzz % 3 == 0){
//         console.log("Fizz");
//     } else if (fizzbuzz % 5 == 0){
//         console.log("Buzz");
//     } else {
//         console.log(fizzbuzz);
//     }
// }

//Question 1
// let question = Number(readLine.question("Choose a positive number to to set as the limit: "));
// while (question <= 0){
//     console.log("Invalid choice");
//     question = Number(readLine.question("Choose a positive number to to set as the limit: "));
// }
// if (question > 0) {
//     for (let fizzbuzz = 0; fizzbuzz <= question; fizzbuzz++){
//         if (fizzbuzz % 3 == 0 && fizzbuzz % 5 == 0) {
//             console.log("Fizzbuzz");
//         } else if (fizzbuzz % 3 == 0){
//             console.log("Fizz");
//         } else if (fizzbuzz % 5 == 0){
//             console.log("Buzz");
//         } else {
//             console.log(fizzbuzz);
//         }
//     }
// }

//Question 2
let h = Number(readLine.question( 'Give me a positive integer and I will start from that number to another number and give you a fizzbuzz response: '));
let g = Number(readLine.question( 'Give me a positive integer and I will count from the first number to that number and give you a fizzbuzz response: '));
for ( let i = h; i <= g; i++){
    if (i % 3 == 0 && i % 5 == 0) {
        console.log('Fizzbuzz')
    }
    else if (i % 3 == 0) {
        console.log('Fizz')
    }
    else if (i % 5 == 0) {
        console.log('Buzz')
    }
    else {
        console.log(i)
    }
}