// CURRYING
// it is a function that takes one argument at a time and returns a new function expecting the next argument
// it is a conversion of function from callable as f(a,b) to f(a)(b)
// curry functions are constructed by chaining closures by immediately returning thier inner function simultaneously.

// eg f(a,b)

function f(a,b){
    console.log(a,b);
}

// after currying

function c(a){
    return function(b){
        console.log(a,b);
    };
}

// example usecase 
function evaluate(operation) {
  return function (a) {
    return function (b) {
      if (operation === "sum") return a + b;
      else if (operation === "multiply") return a * b;
      else if (operation === "divide") return a / b;
      else if (operation === "subtract") return a - b;
      else return "Invalid Operation";
    };
  };
}

const mul = evaluate("multiply"); // first you have initiallise for the later use

console.log(mul(3)(5)); // 15
console.log(mul(2)(6)); // 12





// Interview question
    // Why do we use curry?
    // create curry function to multiply , divide, add ,sub




// WHAT IS INIFINITE CURRYING
// just used a self recursive function

function add(a){
    return function(b){
        if(b) return add(a,b);
        return a;
    };
}

// now you can call f(a)(b)()()... iinfinitly



// DIFFFERENCE BETWEEN CURRY AND PARTIAL APPLICATION
//  partial application 
    // Fixing some of the arguments of a function, producing another function that takes the remaining arguments.
    function x1(a){
        return function (b,c){
            return a+b+c;
        }
    }


// Real world scenario for currying 
    // Curried function to change text of an element
    const changeText = text => element => element.innerText = text;

    // Usage
    const heading = document.querySelector('h1');
    changeText('Hello, Currying!')(heading);


// optional : write a function that converts f(a,b,c) to f(a)(b)(c) function
// just for senior roles, but can be asked
