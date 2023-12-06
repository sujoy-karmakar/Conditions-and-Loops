// Q2. Write a program that grades students based on their marks.


let marks = 82;

switch (true) {
    case marks >= 90:
        console.log("A Grade");
        break;
    case marks >= 70 && marks <= 90:
        console.log("B Grade");
        break;
    case marks >= 50 && marks <= 70:
        console.log("C Grade");
        break;
    default:
        console.log("F Grade");
}
