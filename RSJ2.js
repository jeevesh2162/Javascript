// map, filter and reduce ?

// what is map ?
// JavaScript map(): it creates a new array by applying a given function to each element of an existing array, without modifying the original array.

const nums2=[1,2,3,4,5];
const mul3= nums.map((val,i,arr)=>{  // val = values in arr, i = index , arr=array nums
    return val*3;
})
console.log(mul3);

// what does filter function does ?
// JavaScript filter(): it creates a new array containing only those elements that satisfy a given condition (callback function), without changing the original array.

const nums=[1,2,3,4,5];
const morethan2= nums.filter((val,i,arr)=>{  // val = values in arr, i = index , arr=array nums
    return num>2;
})
console.log(morethan2);



// what does reduce function does ?
// JavaScript reduce(): it processes an array to produce a single accumulated value by applying a callback function to each element, carrying forward a running result.

const nums1=[1,2,3,4,5];
const morethan= nums.reduce((accumulator,current_value,index,array)=>{  // accumulator is the computation of the previous computationval = values in arr, i = index , arr=array nums
    return accumulator+current_val;
},0) //0 is the initial value of accumulator

// sum of all values of array

console.log(morethan2);


// POLYFILLS AND PROTOTYPE
// Polyfills are code that add missing modern JavaScript features in older environments, while prototypes are objects from which other objects inherit properties and methods in JavaScript.

// polyfill for map
Array.prototype.myMap = function (callback) {
 const result = [];
 for (let i = 0; i < this.length; i++) {
  if (i in this) 
     result.push(callback(this[i], i, this));
 }
 return result;
};

// Polyfill for filter
Array.prototype.myFilter = function (callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    if (i in this && callback(this[i], i, this)) {
      result.push(this[i]);
    }
  }
  return result;
};



// Polyfill for reduce
Array.prototype.myReduce = function (callback, initialValue) {
  let accumulator = initialValue;
  let startIndex = 0;

  if (accumulator === undefined) {
    accumulator = this[0];
    startIndex = 1;
  }

  for (let i = startIndex; i < this.length; i++) {
    if (i in this) {
      accumulator = callback(accumulator, this[i], i, this);
    }
  }
  return accumulator;
};




// Polyfill for reduce
Array.prototype.myReduce = function (callback, initialValue) {
  let accumulator = initialValue;
  let startIndex = 0;

  if (accumulator === undefined) {
    accumulator = this[0];
    startIndex = 1;
  }

  for (let i = startIndex; i < this.length; i++) {
    if (i in this) {
      accumulator = callback(accumulator, this[i], i, this);
    }
  }
  return accumulator;
};


// Polyfill for reduce
Array.prototype.myReduce = function (callback, initialValue) {
  let accumulator = initialValue;
  let startIndex = 0;

  if (accumulator === undefined) {
    accumulator = this[0];
    startIndex = 1;
  }

  for (let i = startIndex; i < this.length; i++) {
    if (i in this) {
      accumulator = callback(accumulator, this[i], i, this);
    }
  }
  return accumulator;
};


// difference between map and for each 
// foreach update the array, donot create a new array thats it, we cannot chain other methods to it because it doesnot return anything
nums.forEach((value,index,arr)=>{
    value=value+2;
})



// funciton chaining 
const numsx = [1, 2, 3, 4, 5];

const result = numsx
  .map(n => n * 2)        // [2, 4, 6, 8, 10]
  .filter(n => n > 5);   // [6, 8, 10]

console.log(result);









