//LEXICAL SCOPE
// Lexical scope: a function can access variables defined in its own scope and in the scopes where it was written (defined), not where it is called.

// CLOSURE
// Closure: a function that remembers and can access variables from its lexical scope even after the outer function has finished executing.
function func() {
  const name = "check";
  function test() {
    console.log(name);
  }
  return test;
}

const pick = func(); // we call that func() is returning a closure which is stored in pick
console.log(pick());
// THIS CODE WILL GIVE OUTPUT AS CHECK in javascript only other languages will give an error in others because of lexical scope
//  one more example 
function createBase(nums){
    return function (inner){
        return nums+inner;
    }
}

const addSix= createBase(6);
addSix(10) //return 16
addSix(20)  //return 26






// CLOSURES ALSO HELP US TO OPTIMISE THE CODE 
function heavyCalc(x) {
  console.log("Calculating...");
  return x * x;
}

console.log(heavyCalc(5));
console.log(heavyCalc(5)); // recalculates again ❌

function optimizedCalc() {
  let cache = {};   // remembered by closure

  return function (x) {
    if (cache[x]) return cache[x];
    console.log("Calculating...");
    cache[x] = x * x;
    return cache[x];
  };
}

const calc = optimizedCalc();
console.log(calc(5));
console.log(calc(5)); // reused from cache ✅







//OUTPUT BASED INTERVIEW QUESTION
// VERY IMPORTANT CONCEPT 

function a(){
    for(var i=0;i<3;i++)
        setTimeout(()=>{
            console.log(i);
        },i*1000);
}

a();

//OUTPUT IS : 3 3 3
// var has a functional scope and let has a block scope
// here the value will update in the functional scope so at last the value will be 3 which will be printed 3 times



function a(){
    for(var i=0;i<3;i++)
    setTimeout(()=>{
        console.log(i);
    },i*1000);
}

a();

//OUTPUT IS : 0 1 2
// var has a functional scope and let has a block scope
// so every loop will create a different block which contain a different i value which will be printed late
    // {
    //     0
    // }
    // {
    //     1
    // }
    // {
    //     2
    // }


// NOW AFTER THIS EXPLAINATION THE INTERVIEWER WILL ASK THAT HOW WOULD YOU THE SAME THING USING VAR
// ANSWER IS BY USING --"CLOSURES"--

function a(){
    for(var i=0;i<3;i++){
        function inner(i){
            setTimeout(()=>{
                console.log(i);
            },i*1000);
        }

        inner(i);
    }      
}

a();

// EXPLAINATION
// ig now a new functional scope is created and a new local variable is created in the function as i.
// OUTPUT : 0 1 2 

// QUESTION CAN YOU CREATE A PRIVATE COUNTER WITH HELP OF THE CLOSURES



// MODULE PATTERNS 
// Module Pattern: a JavaScript design pattern that uses closures to create private variables and methods, exposing only what is needed via a public API.
const counterModule = (function () {
  let count = 0;        // private and cant be accessed outside

  return {  //public and can be accessed outside
    increment() { count++; },
    getCount() { return count; }
  };
})();


function a(){}
