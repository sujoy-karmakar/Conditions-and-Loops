// Q1. What are conditional statements? Explain conditional statements with syntax and examples
/*
 * Conditional statements in JavaScript are used to make dicision in our code based on certain condition. They allow us to exicute diffrent blocks
of code depending on weather a specified condition evaluates to true of false.The most common conditional statements in JavaScript are if, else if, and else.
 */


// If statement (If statement is used to exicute a block of code if specified condition is true)

// if temperature is geater-than 25 than it will be a hot day oterwise lessthan 25 it is a cold day.

let temperature = 31;
if (temperature > 25) {
    console.log("IT is a hot day");
}
// In this statement we can see temperature is geater-than 25 so it is a hot day. and our statement is true.


// if-else Statement  (if else statement used to exicute a block of code if condition is true and another block of code if condition is false .)


const yourResult = 40;
if (yourResult > 50) {
    console.log("You are Qualified");
} else {
    console.log("You are not Qualified");
}
// In this statement my Result is under 50 so IT will exicuted you are not Qualiified. Because the statement is false.


// else if statement allows you to check multiple condition sequentially.

let day = 5

if (day === 1) {
    console.log("Monday");
} else if (day === 2) {
    console.log("Tuesday");
} else if (day === 3) {
    console.log("Wednesday");
} else if (day === 4) {
    console.log("Thursday");
} else if (day === 5) {
    console.log("Friday");
}
else if (day === 6) {
    console.log("Saturday");
}
else if (day === 7) {
    console.log("Sunday");
} else {
    console.log("There are only seven days in a week");
}