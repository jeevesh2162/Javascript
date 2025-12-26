// object binding in javascript 
// implicit 
// explicit 

// THIS keyword  follows implicit binding 


// Normal function (this depends on how it’s called):
const obj = {
  name: "Jeevesh",
  greet: function () {
    console.log(this.name);
  }
};
obj.greet(); // Jeevesh

// Arrow function (this is lexically inherited from parent scope):

const obj2 = {
  name: "Jeevesh",
  greet: () => {
    console.log(this.name);
  }
};
obj.greet(); // undefined (or window/global)


// Normal function inside method (problem case):

const obj3 = {
  name: "Jeevesh",
  greet: function () {
    function inner() {
      console.log(this.name);
    }
    inner();
  }
};
obj.greet(); // undefined


// Arrow function inside method (solution):

const obj4 = {
  name: "Jeevesh",
  greet: function () {
    const inner = () => {
      console.log(this.name);
    };
    inner();
  }
};
obj.greet(); // Jeevesh


// 👉 Key rule: Normal functions get their own this; arrow functions borrow this from the surrounding scope.



// settimeout confusing part 
// 'this' Keyword in Javascript (Implicit Binding)
// Question 3 - What is the Output?

const user = {
  name: "Piyush Agarwal!",
  logMessage() {
    console.log(this.name); // What is logged?
  },
};

setTimeout(function () {
  user.logMessage();
}, 1000); // output is it will print Piyush Agarwal

setTimeout(user.logMessage(), 1000); // this will print undef or empty because set timeout take a callback function as a parameter so the function logMessage donot have acces to the parent object now, because now it is not a method ,it is a callback function


// ARGUMENT KEYWORD
