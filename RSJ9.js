// Call , Bind, Apply in Javascript (Explicit binding)
// Question 1 - What is call?

var obj = {name:"jeevesh"};

function sayHello(age){
    console.log("Hello "+ this.name +" "+ age);
}

// type 1
console.log(sayHello.call(obj,24,24));
// type 2
console.log(sayHello.apply(obj,[24,24])); //same as call function just need the parameters to be in an array
// type 3
const bindFunc = sayHello.bind(obj);
console.log(bindFunc(24));

// BIND CHAINING ?

function f(){
    console.log(this.name);
}

f = f.bind({name:"John"}).bind({name:"Ann"});
f();

// bind chaining doesnt work once a function bound with an objremains bound to that object only.


// ===================================================================================================

// IMPORTANT EXAMPLE OF BINDING IN REAL LIFE WORLD 

function checkPassword(success,fail){
    let password=prompt("Enter you password");
    if(password=="jeevesh") success();
    else fail();
}

let user ={
    name: "Piyush Aggrawal",

    loginSuccessful(){
        console.log(`${this.name} logged in`);
    },

    loginFail(){
        console.log(`${this.name} fail to login`);
    }
}

// we need to bind because the functions are called as the callback functions
checkPassword(user.loginSuccessful.bind(user),user.loginFail.bind(user));
// OR now no need to bind because the functions are call as a method not a callback function
checkPassword(()=>{user.loginSuccessful()},()=>{user.loginFail()});


// ======================================================================================================


// IMPORTANT EXAMPLE OF BINDING IN REAL LIFE WORLD 

function checkPassword(success,fail){
    let password=prompt("Enter you password");
    if(password=="jeevesh") success();
    else fail();
}

let user1 ={
    name: "Piyush Aggrawal",

    login(result){
        console.log(`${this.name}` +result? "login successful" : "faile to login");
    }
}

// what should be the input 
// checkPassword(?,?);
checkPassword(user.login.bind(user,true),user.login.bind(user,false));

// ======================================================================================================

// POLYFILLS FOR CALL BIND AND APPLY

// Beginner-friendly polyfill for call
Function.prototype.myCall = function (context) {
  context = context || window;
  context.fn = this;        // attach function
  context.fn();             // call it
  delete context.fn;        // remove it
};

// Beginner-friendly polyfill for apply
Function.prototype.myApply = function (context, args) {
  context = context || window;
  context.fn = this;
  if (args) {
    context.fn(...args);    // spread arguments
  } else {
    context.fn();
  }
  delete context.fn;
};

// Beginner-friendly polyfill for bind
Function.prototype.myBind = function (context) {
  const fn = this;
  return function () {
    fn.myCall(context);
  };
};


// ======================================================================================================
// ======================================================================================================
// ======================================================================================================
// ======================================================================================================
// ======================================================================================================
// ======================================================================================================
// ======================================================================================================
// ======================================================================================================
// ======================================================================================================
// ======================================================================================================
// ======================================================================================================
// ======================================================================================================
// ======================================================================================================
// ======================================================================================================

