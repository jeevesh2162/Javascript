// MEMOIZE AND ONCE ,(THESE 2 ARE NOT INBUILLT FUNCTIONS OF JAVASCRIPT )



// memoize()

// What: Caches function results based on input.
// Use: Avoid recomputation for same arguments (performance optimization).

// Example:

function memoize(fn) {
  const cache = {};
  return function (...args) {
    const key = JSON.stringify(args);
    if (cache[key]) return cache[key];
    cache[key] = fn(...args);
    return cache[key];
  };
}

// usage
const slowSquare = (n) => {
  console.log("computing...");
  return n * n;
};

const fastSquare = memoize(slowSquare);

fastSquare(4); // computing... → 16
fastSquare(4); // cached → 16


// Real use: expensive calculations, DP, API result caching.

// once()

// What: Ensures a function runs only once.
// Use: Initialization, setup, one-time actions.

// Example:

function once(fn) {
  let called = false;
  let result;
  return function (...args) {
    if (!called) {
      called = true;
      result = fn(...args);
    }
    return result;
  };
}

// usage
const initApp = once(() => {
  console.log("App initialized");
  return true;
});

initApp(); // App initialized
initApp(); // nothing happens


// Real use: event listeners, DB connection, config setup.