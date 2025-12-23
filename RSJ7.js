// Objects in javascript

const user= {
    name: 'jeevesh',
    age: 24,
}

// to edit name 
user.name="abc";

// to delete a property
delete user.age;


// to acces age 
console.log(user.age);


// try this and search why a is not deleted
const func = (function (a){
    delete a;
    return a;
})(5)

console.log(func);


// how to declare a dynamic property 
const property = "firstname";
const name1 = "jeevesh";

const user ={
    [property]:name1,
}


// how to iterate through an object
for(key in user){
    console.log(user[key]);
}

// what is json.stringify and json.parse?
const string = JSON.stringify(user);
console.log(JSON.parse(string));

// what is its usecase 
// one usecase is that whenever we want to store something in local storeage we use jason.stringify and then store it 
const user = {
    name: "Piyush",
    age: 24,
};

const strObj = JSON.stringify(user,["name"]); // it will only stringify name property

localStorage.setItem("test", strObj);

console.log(JSON.parse(localStorage.getItem("test")));





// WHATS THE OUTPUT

console.log([..."abc"]);
//output is ['a','b','c']

// how does this work 
const user1= {name:"A", age:34};
const admin= {degn:"admin", ...user}; // this will add all the properties of user


const shape ={
    radius:10,
    diameter(){
        return this.radius * 2;
    },
    perimeter: ()=>{return 2*Maths.PI *this.radius ;}
}

console.log(shape.diameter);//20
console.log(shape.perimeter);//Nan : because this in arrow functions point to the global scope not the parent scope



// DESTRUCTURING OF AN OBJECT
const user2= {
    name:"A",
    age:34,
    fullName:{
        firstname:"asf",
        lastname:"dfsd"
    }};
// 1 : normal
// const {name}=user2;
// console.log(name)

// 2 : if we have a same variable
const name="asd";
const {name:myname}=user2;
console.log(myname);

// 3: nested destructuring
const {fullName:{asf},}=user2;
console.log(asf);


// Shallow Copy
const user = {
    name: "Jeevesh",
    address: {
        city: "Delhi"
    }
};
const shallowCopy = { ...user };
shallowCopy.address.city = "Mumbai";
console.log(user.address.city); // Mumbai (original ALSO changes)


// Deep Copy
const user = {
    name: "Jeevesh",
    address: {
        city: "Delhi"
    }
};
const deepCopy = JSON.parse(JSON.stringify(user));
deepCopy.address.city = "Mumbai";
console.log(user.address.city); // Delhi (original NOT changed)



// console.log({a:0}=={a:0}); false
// console.log({a:0}==={a:0}); false


let person ={name:"Sdf"};
const member=[person];
person=null;
console.log(person); // it will give the object as output

// let person ={name:"Sdf"};
// const member=[person];
// person.name=null;
// console.log(member); // it will give the property as null






const value = {number: 10};

const multiply = (x= {...value})=>{
    console.log(x.number*=2);
}

multiply(); //20
multiply(); //20
multiply(value); //20
multiply(value); //40

