// Definition of variables in JavaScript

// Variables are used to store information that can be referenced with and manipulated for programming.
// It also gives us a constructive way to give it names that can be referenced with and makes it readable to the users.

//Javascript has 3 main types of variables:
//var: it is fuction scoped, can be reassigned and redecalred and has hoisting behaviour 
//let: block scoped, can be reassigned but cannot be decalred in the same scope.
//const:block scoped, cannot be reassigned or redecalred, must be intialized after declaration 

//the typeof operator helps us identify the type of data type(string, int, bool)



// 1. VAR, LET AND CONST

// var - can be redeclared and reassigned
var age = 23;
var age = 24;
age = 25;

console.log("Var age:", age); // 25

// let - can be reassigned but cannot be redeclared in the same scope
let score = 50;
score = 100;

console.log("Let score:", score); // 100

// const - cannot be redeclared or reassigned
const name = "Anjali";

console.log("Const name:", name); // Anjali


// 2. BLOCK SCOPE

var a = 10;

{
    var a = 50;
    let b = 100;

    console.log("Inside block:", a); // 50
}

console.log("Outside block:", a); // 50

// console.log(b); // ReferenceError: b is not defined



// 3. LEXICAL SCOPE / NESTED BLOCKS

let x = 10;

{
    let x = 20;

    {
        let x = 30;
        console.log("Inner block:", x); // 30
    }

    console.log("Middle block:", x); // 20
}

console.log("Outer block:", x); // 10


// 4. FUNCTION SCOPE

var globalValue = 10;

function testScope() {
    var localValue = 20;

    console.log("Inside function:", localValue); // 20
}

testScope();

// console.log(localValue); // ReferenceError



// 5. VARIABLE SHADOWING

var number = 100;

function shadowExample() {
    var number = 200;

    console.log("Local number:", number); // 200
}

shadowExample();

console.log("Global number:", number); // 100


// 6. HOISTING WITH VAR

console.log(hoistedVar); // undefined

var hoistedVar = 10;


// 7. HOISTING WITH LET

// console.log(hoistedLet); // ReferenceError
let hoistedLet = 20;


// 8. HOISTING WITH CONST

// console.log(hoistedConst); // ReferenceError
const hoistedConst = 30;


// 9. FUNCTION SCOPE + HOISTING

var value = 10;

function hoistingExample() {
    console.log(value); // undefined

    var value = 20;
}

hoistingExample();


// 10. REDECLARATION VS REASSIGNMENT

// let marks = 80;
// let marks = 90; // SyntaxError: Cannot redeclare

let marks = 80;
marks = 90; // Valid reassignment

console.log("Marks:", marks); // 90

// const cannot be reassigned
// const pi = 3.14;
// pi = 3.15; // TypeError