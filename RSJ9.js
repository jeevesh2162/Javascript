// Call , Bind, Apply in Javascript (Explicit binding)
// Question 1 - What is call?

var obj = {name:"jeevesh"};

function sayHello(age){
    console.log("Hello "+ this.name +" "+ age);
}

console.log(sayHello.call(obj,24,24));
console.log(sayHello.apply(obj,[24,24])); //same as call function just need the parameters to be in an array

const bindFunc = sayHello.bind(obj);
console.log(bindFunc(24));