const readLine = require('readline-sync');

//number 1
    let jokequestion = readLine.question("Do you want to hear a joke?\n Yes or No: ")
if (jokequestion=="Yes") {
    console.log("Too bad, I won't tell you!")
}else if(jokequestion=="No") {
    console.log("That sucks...")
}else {
    console.log("weird answer...")
}

//number 2

let numquestion = readLine.question("Enter a number to find whether it's divisible by 2, 3, 4, 5, 6 or if they're not: ");
if (numquestion % 2 == 0) {
console.log("divisible by 2!")
}else if (numquestion % 3 == 0) {
    console.log("Not divisible by 3!")
}else if (numquestion % 4 == 0) {
    console.log("Not divisible by 4!")
}else if (numquestion % 5 == 0) {
    console.log("Not divisible by 5!")
}else if (numquestion %6 == 0) {
    console.log("Not divisible by 6!")
}else {
    console.log("that's not divisible by any of the numbers!")
}

//number 4

let secret = 28;
let secretguess = readLine.question("Guess secret number: ")
if (secretguess == secret) {
    console.log("Congratulations!\nThat's the right number!")
} else if (secretguess > secret){
    console.log("That number is bigger!")
} else if (secretguess < secret){
    console.log("That number is smaller!")
} else {
    console.log("I don't think that's a number...")
}

//number 5

let price = Number(readLine.question("What's the price?: "));
let tax = price*0.08;
let finalprice = price+tax;
if (price <= 0) {
    console.log("That number is invalid!")
}else {
    console.log(finalprice);
}

//number 7

let mealprice = Number(readLine.question("What's the price of the meal?: "));
if (mealprice<=0) {
    console.log("Prices of 0 and below are not allowed.");
    return
}
let greattip = mealprice*0.2;
let goodtip = mealprice*0.15;
let averagetip = mealprice*0.1;
let tipquestion = readLine.question("How good was your meal?\nAnswer with Great, Good, or Average: ");
if (tipquestion == "Great") {
    console.log(`The cost is ${mealprice+greattip}\n The price is ${mealprice} and the tip is ${greattip}`)
}else if (tipquestion == "Good") {
    console.log(`The cost is ${mealprice+goodtip}\n The price is ${mealprice} and the tip is ${goodtip}`)
}else if (tipquestion == "Average") {
    console.log(`The cost is ${mealprice+averagetip}\n The price is ${mealprice} and the tip is ${averagetip}`)
} else {
    console.log("That's a weird answer.")
}