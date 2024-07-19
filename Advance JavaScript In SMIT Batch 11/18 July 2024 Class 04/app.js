// 18 July 2024 Class 04

// Higher Order Functions

// Function that takes another function as an argument

function greet(name) {
  return `Hello, ${name}!`;
}

function logGreeting(greetingFunc) {
  console.log(greetingFunc("Alice")); // Hello, Alice!
}

logGreeting(greet); // function k andar function ko , as a parameter pass karwana is caled as the higher order function

// Function that returns another function

// -------------- Ternary Operator ------------------

// This topic has been done

// --------------------- Modules---------------------

// Modules are used to encapsulate code and make it reusable
