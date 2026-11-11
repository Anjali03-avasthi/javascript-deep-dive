//functions def 
// it is used to define a block of resuable code. it helps is write the same code again and again 

// parameters and arguments 
//parameter is like a placeholder we define in the function 
//argument is the actual values that are passed in by calling that fucntion 

//console.log() → Displays a value.
//return sends a value back from the function 

// An interesting property: Function declarations are hoisted.
//This means you can call them before their declaration.



// DAY 2: JAVASCRIPT FUNCTIONS



// 1. FUNCTION DECLARATION

function greet() {
    console.log("Hello, welcome to JavaScript!");
}

greet();



// 2. PARAMETERS AND ARGUMENTS


function introduce(name, age) {
    console.log(`My name is ${name} and I am ${age} years old.`);
}

introduce("Anjali", 23);
introduce("Khushi", 19);



// 3. RETURN STATEMENT


function add(a, b) {
    return a + b;
}

let sum = add(10, 20);

console.log("Sum:", sum); // 30



// 4. CONSOLE.LOG VS RETURN


function calculate(a, b) {
    console.log(a + b);
}

let result = calculate(10, 20);

console.log("Result:", result); // undefined

// console.log() displays a value.
// return sends a value back from a function.



// 5. RETURN TERMINATES FUNCTION EXECUTION


function test() {
    return 100;

    // This statement will never execute.
    console.log("Hello");
}

console.log("Test result:", test()); // 100



// 6. FUNCTION DECLARATION HOISTING


// Calling the function before its declaration.

sayHello();

function sayHello() {
    console.log("Hello from JavaScript!");
}



// 7. FUNCTION EXPRESSION


const welcome = function () {
    console.log("Welcome to my JavaScript journey!");
};

welcome();



// 8. ARROW FUNCTIONS


// Arrow function with multiple parameters.

const multiply = (a, b) => {
    return a * b;
};

console.log("Multiplication:", multiply(5, 4)); // 20



// 9. IMPLICIT RETURN


// When using a single expression without curly braces,
// JavaScript automatically returns the result.

const square = (num) => num * num;

console.log("Square:", square(5)); // 25



// 10. ARROW FUNCTION WITH NO PARAMETERS


const message = () => "Learning JavaScript every day!";

console.log(message());



// 11. ARROW FUNCTION WITH ONE PARAMETER


// Parentheses are optional for one parameter.

const cube = num => num * num * num;

console.log("Cube:", cube(3)); // 27



// 12. EXPLICIT RETURN VS IMPLICIT RETURN


// Explicit return

const addition = (a, b) => {
    return a + b;
};

// Implicit return

const subtraction = (a, b) => a - b;

console.log(addition(15, 5));    // 20
console.log(subtraction(15, 5)); // 10



// 13. FUNCTION WITHOUT RETURN


function displayMessage() {
    console.log("This function does not return anything.");
}

let output = displayMessage();

console.log("Output:", output); // undefined



// 14. CALLBACK FUNCTIONS


// A callback is a function passed as an argument
// to another function.

function greetUser(name) {
    return "Hello " + name;
}

function processUser(callback) {
    console.log(callback("Anjali"));
}

processUser(greetUser); // Hello Anjali



// 15. PASSING AN ANONYMOUS FUNCTION AS CALLBACK


function calculateResult(callback) {
    let result = callback(10, 20);
    console.log("Calculated result:", result);
}

calculateResult(function (a, b) {
    return a + b;
});



// 16. HIGHER-ORDER FUNCTIONS


// A higher-order function either:
// 1. Accepts another function as an argument, OR
// 2. Returns a function.

function operation(a, b, callback) {
    return callback(a, b);
}

const result1 = operation(10, 5, (x, y) => x + y);
const result2 = operation(10, 5, (x, y) => x * y);

console.log("Addition:", result1);       // 15
console.log("Multiplication:", result2); // 50
