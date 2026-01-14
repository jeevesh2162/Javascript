// Debounce and Throttling 

// Debouncing (JavaScript)

// Definition:
// Debouncing ensures that a function is executed only after a specified delay has passed since the last time it was called. If the function is triggered again within the delay, the timer resets.
// 👉 Used when you want one final action after continuous events stop.

// Common use cases: search input, window resize, form validation.

// Sample code:

function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

// Usage
const search = (query) => {
  console.log("Searching for:", query);
};

const debouncedSearch = debounce(search, 500);

// debouncedSearch("a");
// debouncedSearch("ab");
// debouncedSearch("abc"); // only this runs after 500ms


//===========================================================================================================================
// Throttling (JavaScript)

// Definition:
// Throttling ensures that a function is executed at most once in a specified time interval, no matter how many times the event occurs.
// 👉 Used when you want controlled, regular execution.

// Common use cases: scroll events, button clicks, mouse move.

// Sample code:

function throttle(fn, limit) {
  let inThrottle = false;
  return function (...args) {
    if (!inThrottle) {
      fn.apply(this, args);
      inThrottle = true;
      setTimeout(() => {
        inThrottle = false;
      }, limit);
    }
  };
}

// Usage
const handleScroll = () => {
  console.log("Scroll event handled");
};

const throttledScroll = throttle(handleScroll, 1000);

// window.addEventListener("scroll", throttledScroll);

// Debounce vs Throttle (One-line Interview Difference)

// Debounce: Executes after events stop

// Throttle: Executes during events at fixed intervals