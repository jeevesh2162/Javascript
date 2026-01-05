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
// promises run in parallel. means if multiple promises are executed then they will run parallely rather than sequentially
// in case of async await they start parallelly but may waork sequentially if the wait is used in a certain way. 

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
getUser(1)
  .then((res) => {
    console.log(res);
    return getOrders(res.id);
  })
  .then((res) => {
    console.log(res);
    return getOrderDetails(res[0]);
  })
  .then((res) => {
    console.log(res);
  });

// ======================================================================================================
// 19:25
// PROMISE COMBINATORS
// Promise combinators are static methods on Promise used to handle multiple promises together and control how/when they resolve or reject.

// 1. Promise.all
// it runs all the promises in parallel but if any one promise fails to run then all the promises will fail

function fetchUser() {
  return new Promise((resolve) => setTimeout(() => resolve("User data"), 1000));
}

function fetchOrders() {
  return new Promise((resolve) =>
    setTimeout(() => resolve("Order data"), 1500)
  );
}

function fetchPayments() {
  return new Promise((resolve) =>
    setTimeout(() => resolve("Payment data"), 500)
  );
}

Promise.all([fetchUser(), fetchOrders(), fetchPayments()])
  .then(([user, orders, payments]) => {
    console.log(user);
    console.log(orders);
    console.log(payments);
  })
  .catch((error) => {
    console.error("One promise failed:", error);
  });

// 2.Promise.race
// Promise.race() returns a promise that settles (resolves or rejects) as soon as the first promise settles, and ignores the rest.

function fastAPI() {
  return new Promise((resolve) =>
    setTimeout(() => resolve("Fast response"), 500)
  );
}

function slowAPI() {
  return new Promise((resolve) =>
    setTimeout(() => resolve("Slow response"), 1500)
  );
}

Promise.race([fastAPI(), slowAPI()])
  .then((result) => {
    console.log("Winner:", result);
  })
  .catch((error) => {
    console.error("First failure:", error);
  });

// 3. Promise.allSettled
// Promise.allSettled() returns a promise that resolves after all promises have settled, meaning each one is either fulfilled or rejected; it never rejects itself.

function taskSuccess() {
  return new Promise((resolve) =>
    setTimeout(() => resolve("Task completed"), 1000)
  );
}

function taskFail() {
  return new Promise((_, reject) =>
    setTimeout(() => reject("Task failed"), 1500)
  );
}

Promise.allSettled([taskSuccess(), taskFail()]).then((results) => {
  results.forEach((result) => {
    if (result.status === "fulfilled") {
      console.log("Success:", result.value);
    } else {
      console.log("Failure:", result.reason);
    }
  });
});

// 4. Promise.any
// Promise.any() returns a promise that resolves as soon as the first promise fulfills and ignore the rejected ones ; it rejects only if all promises reject (with AggregateError).
function api1() {
  return new Promise((_, reject) =>
    setTimeout(() => reject("API 1 failed"), 500)
  );
}

function api2() {
  return new Promise((resolve) =>
    setTimeout(() => resolve("API 2 success"), 1000)
  );
}

function api3() {
  return new Promise((resolve) =>
    setTimeout(() => resolve("API 3 success"), 1500)
  );
}

Promise.any([api1(), api2(), api3()])
  .then((result) => {
    console.log("First success:", result);
  })
  .catch((error) => {
    console.error("All failed:", error.errors);
  });

// ======================================================================================================
// ASYNC AWAIT
// firstly the code without async await
function loadJson(url) {
  return fetch(url).then((response) => {
    if (response.status == 200) {
      return response.json();
    } else {
      throw new Error(response.status);
    }
  });
}

loadJson("https//:www.google.com/").catch((error) => {
  console.log("there is an issue in this");
});

// code with asyn await

// firstly the code without async await
async function loadJson(url) {
  let response = await fetch(url);

  if (response.status == 200) {
    let json = await response.json();
    return json;
  }

  throw new Error(response.status);
}

loadJson("https//:google.com/").catch((error) => {
  console.log("there is an issue in this");
});
// ======================================================================================================
// SOLVE PROMISES RECURSIVELY

function promiseOne() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("Promise 1 resolved"), 1000);
  });
}

function promiseTwo() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("Promise 2 resolved"), 1500);
  });
}

function promiseThree() {
  return new Promise((resolve, reject) => {
    setTimeout(() => reject("Promise 3 rejected"), 2000);
  });
}

function promrec(prom) {
  if (prom.length == 0) return;

  // process
  let curr = prom.shift();
  // this is wrong because all promises run in parallel not in sequwntial form
  // curr().then((res)=>console.log(res.json())).catch((error)=>console.log(error)));
  curr()
    .then((res) => {
      console.log(res);
      promrec(prom); // move to next
    })
    .catch((err) => {
      console.log(err);
      promrec(prom); // continue even on error
    });

  promrec(prom);
}

promrec([promiseOne, promiseTwo, promiseThree]);

// ======================================================================================================
// POLYFILLS OF PROMISESE

function MyPromise(executor) {
  let state = "PENDING";   // PENDING | FULFILLED | REJECTED
  let value = undefined;

  let onFulfilledCallbacks = [];
  let onRejectedCallbacks = [];

  function resolve(val) {
    if (state !== "PENDING") return;
    state = "FULFILLED";
    value = val;

    onFulfilledCallbacks.forEach(cb => cb(value));
  }

  function reject(err) {
    if (state !== "PENDING") return;
    state = "REJECTED";
    value = err;

    onRejectedCallbacks.forEach(cb => cb(value));
  }

  this.then = function (onFulfilled) {
    return new MyPromise((resolveNext, rejectNext) => {
      function handleFulfill(val) {
        try {
          const result = onFulfilled ? onFulfilled(val) : val;
          resolveNext(result);
        } catch (e) {
          rejectNext(e);
        }
      }

      if (state === "FULFILLED") {
        setTimeout(() => handleFulfill(value), 0);
      } else if (state === "PENDING") {
        onFulfilledCallbacks.push(handleFulfill);
      }
    });
  };

  this.catch = function (onRejected) {
    return new MyPromise((resolveNext, rejectNext) => {
      function handleReject(err) {
        try {
          const result = onRejected(err);
          resolveNext(result);
        } catch (e) {
          rejectNext(e);
        }
      }

      if (state === "REJECTED") {
        setTimeout(() => handleReject(value), 0);
      } else if (state === "PENDING") {
        onRejectedCallbacks.push(handleReject);
      }
    });
  };

  try {
    executor(resolve, reject);
  } catch (e) {
    reject(e);
  }
}



// IMPLEMENTATION 
const p = new MyPromise((resolve, reject) => {
  setTimeout(() => resolve("Success!"), 1000);
});

p.then(res => {
  console.log(res);
  return "Next value";
})
.then(val => console.log(val))
.catch(err => console.log(err));

// ======================================================================================================
// POLYFILLS OF THE FUNCTIONS OF PROMISE 

Promise.myAll = function (promises) {
  return new Promise((resolve, reject) => {
    let results = [];
    let completed = 0;

    if (promises.length === 0) resolve([]);

    promises.forEach((p, index) => {
      Promise.resolve(p)
        .then((val) => {
          results[index] = val;
          completed++;
          if (completed === promises.length) {
            resolve(results);
          }
        })
        .catch(reject); // fail fast
    });
  });
};


Promise.myRace = function (promises) {
  return new Promise((resolve, reject) => {
    promises.forEach((p) => {
      Promise.resolve(p)
        .then(resolve)
        .catch(reject);
    });
  });
};


Promise.myAllSettled = function (promises) {
  return new Promise((resolve) => {
    let results = [];
    let completed = 0;

    if (promises.length === 0) resolve([]);

    promises.forEach((p, index) => {
      Promise.resolve(p)
        .then((val) => {
          results[index] = {
            status: "fulfilled",
            value: val
          };
        })
        .catch((err) => {
          results[index] = {
            status: "rejected",
            reason: err
          };
        })
        .finally(() => {
          completed++;
          if (completed === promises.length) {
            resolve(results);
          }
        });
    });
  });
};




Promise.myAll([promiseOne(), promiseTwo()])
  .then(console.log)
  .catch(console.error);

Promise.myRace([promiseOne(), promiseThree()])
  .then(console.log)
  .catch(console.error);

Promise.myAllSettled([promiseOne(), promiseThree()])
  .then(console.log);

  
// ======================================================================================================
// ======================================================================================================
// ======================================================================================================
// ======================================================================================================
