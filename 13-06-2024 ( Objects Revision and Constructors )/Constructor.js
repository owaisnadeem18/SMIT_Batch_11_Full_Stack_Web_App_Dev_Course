// Constructors in JavaScript

// function Student() {
//   this.name = "Owais Nadeem";
//   this.cgpa = 3.1;
//   this.uni = "Dawood UET";
//   this.lucky_num = 8;
// }

// console.log(new Student());

function Greet(name, deg, uni, semester, date) {
  this.name = name;
  this.deg = deg;
  this.uni = uni;
  this.semester = semester;
  this.date = date;

  this.message = function () {
    return `Hello ${name} ! You are enrolled in udergraduation ${deg} Degree from ${uni} , currently you are in the ${semester} semester . Your Uni life will get ended on ${date}`;
  };
}

const data = new Greet(
  "Owais Nadeem ",
  "BSCS",
  "Dawood University",
  "final",
  "15 November 2024"
);

console.log(data.message());

// Prototype means that the same refrence has been passed to all of the objects
