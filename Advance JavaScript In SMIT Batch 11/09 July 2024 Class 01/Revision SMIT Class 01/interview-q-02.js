let c = 1;
function test() {
  console.log(c); // it will give error becuase there is temporary dead zone for let and const variable
  let c = 2;
  console.log(c);
  console.log(c);
}
test();
console.log(c);
