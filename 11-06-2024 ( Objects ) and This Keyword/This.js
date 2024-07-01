// This Object in JavaScript

console.log(this); // it will return window object

let obj = {
  name: "Owais nadeem",
  profession: "Student",
  Uni: "Dawood UET",
  this_statement: function () {
    console.log(this.Uni, this.name, this.profession); // through this way I can print key and values from 'this' keyword
    // console.log(Uni, name, profession); // You can't access in this manner
  },
};

// Now , if any time I call 'this' keyword , with the help of object , then it will return object key values

obj.this_statement();
