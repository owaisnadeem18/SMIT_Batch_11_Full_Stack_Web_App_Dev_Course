var c = 56;

function test() {
  console.log(c);
  var a = 1;
  if (true) {
    var a = 2;
    console.log(a);
  }
  console.log(a);
}
test();
