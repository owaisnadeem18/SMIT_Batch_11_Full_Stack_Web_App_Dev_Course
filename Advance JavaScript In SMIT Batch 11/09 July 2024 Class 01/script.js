// Variable ka scope kya hay ??

// Variable has a function scope . If we are creating a javascript outside any function , then it has global scope.

// let myName = "Owais"; // It is globally accessible

// ES6 has two other keywords to declare the variables

// let and const

// In let keyword , we can not redeclare our variable

// Let has block scope { //scope }

// but var can be accessible outside a function

// ----- Note : ----------

// const and let both have block scope
// var has global scope

// {
//   let a = 30;
//   console.log(a);
// }

// console.log(a); // It will throw error because of let scope

// Hoisting of variables

// console.log(a); // answer will be undefined , because var a will get hoisted at the top
// var a = 56;

// Loop code is synchronous
// for (var i = 0; i < 5; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 1000);
// }

// It will print 5 (for 5 times)

// for (let i = 0; i < 5; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 1000);
// }

// The topic and the summary of today's class was:

// Var vs Let vs Const
// Event Loop In JavaScript
// Closures In JavaScript

// -------------- Destructuring in JavaScript -------------------

let obj = {
  myName: "Owais",
  email: "owaisnadeem15@gmail.com",
};

// console.log(obj.myName); // to get rid of this issue we can use destructuring

let { myName, email } = obj;

console.log(myName);
console.log(email);
