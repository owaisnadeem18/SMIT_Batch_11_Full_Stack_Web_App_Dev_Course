// function Shape() {
//   this.type = "Shape";
// }

// Shape.prototype.getType = function () {
//   return this.type;
// };

// const shape = new Shape();
// shape.type = "Circle";
// console.log(shape.getType());

const obj = {
  a: 1,
  b: 2,
  c: 3,
};

// console.log(Object.keys(obj));

Object.keys(obj).forEach((i) => console.log(i));
