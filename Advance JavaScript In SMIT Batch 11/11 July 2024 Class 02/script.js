// // console.log("a");

// // setTimeout(() => {
// //   console.log("b");
// // }, 0);

// // console.log("c");
// // console.log("c");
// // console.log("c");

// const user = {
//   name: "Alice",
//   address: {
//     city: "Wonderland",
//     zip: "12345",
//   },
// };

// const {
//   name,
//   address: { city, zip },
// } = user;

// console.log(name); // Output: Alice
// console.log(city); // Output: Wonderland
// console.log(zip); // Output: 12345

// ----------------- 11 - July 2024 ---------------

// Objects keep it's refrence , so we have to share the refrence of same objects with others

// To keep the original array or objects same , we can pass the copy of object

// let obj = {};

// Shallow copy => use of spread operator , in order to get the copy of our object

// --- Enhanced Object Literals

// var name = "Duke";
// var color = "Brown";
// var age = 5;

// // Using Object Literal Enhancement
// // Combines all variables into a dog object
// var dog = { name, color, age };
// console.log(dog);

// Optional channing in JavaScript

// -- In Optional channing , we request the JS compiler to return "undefined" even if the object is containing those key value pairs which are not available in object , instead of giving error or crashing the code

// let obj = {
//   myName: "Owais",
//   School: "SMIT",
// };

// console.log(obj.School.class.element);

para.addEventListener("click", function () {
  console.log(this);
});

btn.addEventListener("click", () => {
  console.log(this); // window will get printed
});

// SetTimeOut is a Browser feature

// -------------- Call Back --------------

// call back khud aik function hota hay , jo aik function ko as an argument pass karta hay
