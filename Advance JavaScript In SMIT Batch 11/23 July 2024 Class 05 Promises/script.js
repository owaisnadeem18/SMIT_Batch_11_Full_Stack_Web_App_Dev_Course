// Promises In JavaScript

// let prom = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("Time ho gya");
//   }, 3000);
// });

// console.log(prom);

// Example of a simple callback function
// function greet(name, callback) {
//     console.log('Hello ' + name);
//     callback();
// }

// function sayGoodbye() {
//     console.log('Goodbye!');
// }

// greet('John', sayGoodbye);
// // Output:
// // Hello John
// // Goodbye!

// let name = "owais";

// const admission = (naam) => {
//   return new Promise((resolve, reject) => {
//     let number = Math.random() > 0.3;

//     if (number) {
//       resolve(`${naam} has been admitted in the school `);
//     } else {
//       reject(`${naam} has not been admitted in the school `);
//     }
//   });
// };

// admission(name)
//   .then((res) => console.log(res))
//   .catch((err) => console.log(" Bacha Pass he nahi hua hay ! ", err))
//   .finally(() => {
//     console.log("Selection wagera complete ho gaye hay ");
//   });

// Some further promise methods

// Promise.all

// let promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("I am promise 01");
//   }, 2000);
// });

// let promise2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("I am promise 02");
//   }, 2000);
// });

// let promise3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("I am promise 03");
//   }, 2000);
// });

// let allPromises = Promise.all([promise1, promise2, promise3]);

// // It will return the result of promises , once all the the promises are resolved

// console.log(allPromises);

let promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("I am promise 01");
  }, 2000);
});

let promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("I am promise 02");
  }, 2000);
});

let promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("I am promise 03");
  }, 2000);
});

let allPromises = Promise.allSettled([[promise1, promise2, promise3]]);

console.log(allPromises);
