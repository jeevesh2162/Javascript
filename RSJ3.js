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



// PARAMS AND THE ARGUMENT (DIFFERENCE);
function x1(x){ //params
    console.log(x);
    // var x=20;
}
x1(3); //argument




// SPREAD AND REST OPERATOR
//it must be the last parameter
function spread(...arr){ //rest
    return arr[0]*arr[1];
}

var array= [12];
spread(...array);//spread
// Output: NaN — because arr becomes [12], so arr[0] = 12 and arr[1] = undefined, and 12 * undefined results in NaN.


// CALLBACK FUNCTION
// function that is used inside other function as a parameter 
// eg used in reduce map filter and event listners etc

// ARRAOW FUNCTION 
// const ARR=()=>{};
// difference between normal arrow function for interview
    // 1. syntax
    // 2. return - arrow function donot need to return if there are no brackets
    // 3. // function fn(){
        //     console.log(arguments);
        // }

        // fn(1,2,3)
        // it will give an output but similarly if we do it with arrow function it will give error
    // 4. this keyword
        // const user = {
        //  username ="jeevesh";
        //  rc1: ()=>{
        //      console.log(this.username); // this is pointing to the global object
        // }
        //  rc2(){
        //      console.log(this.username); // this is pointing to parent obj that is user
        //  }
        // }