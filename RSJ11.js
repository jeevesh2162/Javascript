// promises in javascript
// synchronous and asynchronous code

// example

console.log("start");

function check(user) {
  setTimeout(() => {
    return user;
  }, 1000);
}

const store = check("jeevesh");

console.log(store);

console.log("stop");

// output will be
// start
// undefined
// stop

// this is because settimeout is an asynchronous function and the value was return after 1 sec , till then the program was over

// so we can acces the variable using callback function
// CALLBACK
console.log("start");

function check(user, cb) {
  setTimeout(() => {
    cb(user);
  }, 1000);
}

const store1 = check("jeevesh", (x) => {
  console.log(x);
});

console.log("stop");

// output will be
// start
// stop
// jeevesh

// ======================================================================================================

// What is Callback Hell?
// Callback hell occurs when multiple callback functions are nested inside each other, making the code hard to read, understand, debug, and maintain.

// ======================================================================================================
// solution for this callback hell problem is PROMISES
// how ?

// PROMISES
// A Promise is an object that represents the result of an asynchronous operation (future value).

console.log("start");

const prom = new Promise((res, rej) => {
  setTimeout(() => {
    var result = true;
    if (result) res("true");
    else rej("false");
  }, 1000);
});

// how to run and execut the promise

prom
  .then((res) => {
    console.log(res);
  })
  .catch((rej) => {
    consol.log(rej);
  });

console.log(stop);

// ======================================================================================================
// how the call back hell problem is resolve using promises
// Callback hell ❌
getUser(1, function (user) {
  getOrders(user.id, function (orders) {
    getOrderDetails(orders[0], function (details) {
      console.log(details);
    });
  });
});

// Same logic using Promises ✅
// Promises with resolve + reject (callback hell fixed)

function getUser(id) {
  return new Promise((resolve, reject) => {
    if (!id) reject("Invalid user id");
    setTimeout(() => resolve({ id, name: "Jeevesh" }), 500);
  });
}

function getOrders(userId) {
  return new Promise((resolve, reject) => {
    if (!userId) reject("User not found");
    setTimeout(() => resolve([101, 102]), 500);
  });
}

function getOrderDetails(orderId) {
  return new Promise((resolve, reject) => {
    if (!orderId) reject("Order not found");
    setTimeout(() => resolve({ orderId, price: 999 }), 500);
  });
}

// Promise chaining
getUser(1)
  .then((user) => getOrders(user.id))
  .then((orders) => getOrderDetails(orders[0]))
  .then((details) => console.log("Order Details:", details))
  .catch((error) => console.error("Error:", error));

//   another method of promise chaining 
getUser(1).then((res)=>{
    console.log(res);
    return getOrders(res.id);
}).then((res)=>{
    console.log(res);
    return getOrderDetails(res[0]);
}).then((res)=>{
    console.log(res);
})

// ======================================================================================================

// ======================================================================================================
// ======================================================================================================
// ======================================================================================================
// ======================================================================================================
// ======================================================================================================
// ======================================================================================================
// ======================================================================================================
// ======================================================================================================
