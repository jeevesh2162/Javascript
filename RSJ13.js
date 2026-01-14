// Event propagation - Bubbling, Capturing, Deligation

// Q what is event propagation 
// Definition:
// Event propagation is the mechanism by which an event travels through the DOM tree, determining the order in which event handlers are executed when an event occurs on a nested element.
// It happens in three phases:
// 1. Capturing phase (outer → inner)
    // document → html → body → div → button
// 2. Target phase (actual element clicked)
    // button (actual clicked element)
// 3. Bubbling phase (inner → outer, default)
    // button → div → body → html → document


// ===================================================================================================================
//What is event bubbling ?
    // button → div → body → html → document

const div = document.querySelector("div");
const form = document.querySelector("form");
const button = document.querySelector("button");

div.addEventListener("click", function () {
  alert("div");
});

button.addEventListener("click", function () {
  alert("div");
});

form.addEventListener("click", function () {
  alert("div");
});

    
// try this 
// first - the button will trigger
// second - the form will trigger 
// third - div will trigger
// becaue button is inside form is inside div, 

// ===================================================================================================================
// This comes under bubbling 
// Q event.target vs this.tagname vs event.currentTarget 

// 1️⃣ event.target

// Definition:
// event.target refers to the actual element on which the event originally occurred, even if the event bubbles up.

// ➡️ It never changes during propagation.
    // eg in the above case output is Button ie the leaf node of the DOM tree

// 2️⃣ event.currentTarget

// Definition:
// event.currentTarget refers to the element whose event listener is currently executing.

// ➡️ It changes as the event bubbles or captures.
    //❌ “this will return the tag of where you click”
    //✅ It returns the element on which the listener is attached, not the clicked element.

// 3️⃣ this (inside event listener)

// Definition:
// Inside a normal function, this refers to the same element as event.currentTarget.
    // ❌ “this will return the root node of the DOM tree”
    // ✅ It returns the element handling the event, not the root.

// ===================================================================================================================

// What is event capturing / trickling?
// Event capturing is the phase of event propagation in which an event travels from the outermost element (document/root) down to the target element before the actual target handler runs.
//  order or capturing phase : document → html → body → parent → child (target)

const parent = document.getElementById("parent");
const child = document.getElementById("child");

parent.addEventListener(
  "click",
  function () {
    console.log("PARENT clicked (capturing)");
  },
  true   // 👈 capture = true or {capture: true,}
);

child.addEventListener(
  "click",
  function () {
    console.log("CHILD clicked (capturing)");
  },
  true
);


// ====================================================================================================================
// Q how do you stop bubbling or capturing?
// ❌ “it is used to listen the event on which we click on”
// ✅ It is used to stop the event from propagating to other elements. so we use "stoppropagation()".
// it will propagate till the point where stoppropagation function is mentioned in the event listner.

// What stopPropagation() does
// Prevents the event from moving further up or down the DOM tree
// Stops the event from reaching parent or child listeners
// Works in both capturing and bubbling phases

// JavaScript (WITHOUT stopPropagation)
document.getElementById("parent").addEventListener("click", () => {
  console.log("Parent clicked");
});

document.getElementById("child").addEventListener("click", () => {
  console.log("Child clicked");
});

// 🖱 Click the button → Output
// Child clicked
// Parent clicked


// ➡ Event bubbles from child → parent

// ✅ Example 2: WITH stopPropagation()
document.getElementById("parent").addEventListener("click", () => {
  console.log("Parent clicked");
});

document.getElementById("child").addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("Child clicked");
});

// 🖱 Click the button → Output
// Child clicked


// 🚫 Parent does NOT receive the event.

// 🔄 Event Flow (visual)
// Without stopPropagation:
// Child → Parent → Body → Document

// With stopPropagation:
// Child ❌

// ⚠️ Important Clarifications (INTERVIEW GOLD)
// 1️⃣ stopPropagation() ≠ preventDefault()
// Method	Purpose
// stopPropagation() ->	Stops event bubbling
// preventDefault()	-> Stops browser default action

// ====================================================================================================================


// ✅ Simple Example (WITHOUT delegation)
<ul id="list">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>

document.querySelectorAll("li").forEach(li => {
  li.addEventListener("click", () => {
    console.log(li.textContent);
  });
});


// ❌ Problems:
// Too many listeners
// Newly added <li> won’t work


// ✅ Same Example WITH Event Delegation
document.getElementById("list").addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    console.log(e.target.textContent);
  }
});


// ✔ One listener
// ✔ Works for dynamically added elements
// ✔ Faster and memory-efficient

// ==================================================================================================================

// CAPTURING 
// 📌 What is Event Capturing?
// Event flows in 3 phases:
// Capturing → Parent → Child
// Target
// Bubbling → Child → Parent
// Capturing happens before bubbling.
