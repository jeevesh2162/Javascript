// FUNCTIONS in javascript 
// Function declaration 
function x(){
    return 0;
}

// function expression - function is assigned to a variable
const func = function(){
    return 0;
}

// What are the first class function 
// First-class functions are functions that can be assigned to variables, passed as arguments, returned from other functions, and stored in data structures like any other value.
function a(v){
    return v;
}

function b(a){
    return a(5);
}

b(a()); 

// What is an IIFE ?
(function name(v){
    console.log(v);
})(5);

(function name(x){
    (function name(v){
    console.log(x);
})(5);
})(1); // this will return 1 , because of the concept called closure in javascript 


// function hoisitng 

functionName(5);

console.log(x);
function functionName(a){
    console.log(a);
}

var x=10;
// this function will run and give output because of hoisting but the variable will be undefined because of hoisitng 

// Example of hoisting 
var x = 20;
 function x(){
    console.log(x);
    var x=20;
}
x();

// OUTPUT : undefined