// for (let i = 1; i <= 5; i++) {
//   console.log(i);
//   setTimeout(() => {
//     console.log("My Name is Owais Nadeem");
//   }, 1000);
// }

// for (var i = 1; i <= 5; i++) {
//   //   console.log(i);
//   setTimeout(function () {
// console.log(i);
//   }, 1000);
// }

// Rest Operator Concept in JavaScript

// Rest operator is used to represent an indefinite number of arguments as an array.

let obj = {
  myName: "Owais ",
  myAge: 22,
  profession: "Front End Dev",
  Institute: "SMIT",
};

// Now, rest operator is ... (we can print the remaining elements of array or objects through this way)

// The rest operator (...) allows you to represent an indefinite number of elements as an array or object properties. It is particularly useful in the following scenarios:

let { ...rest } = obj;

console.log(rest);

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

console.log(arr[2], arr[3], ...arr);
