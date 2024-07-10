// Closure in JavaScript

// There is a concept that an inner function can get the variable's values of outer function which will be considered as lexical scope (for variable of outer variables , for inner functions)

let outFunct = () => {
  console.log("I am an outer function ");

  let variable_outer_fun = 89;

  let InnerFunc = () => {
    let a = 45;
    let b = 55;
    console.log("I am an inner function");
    console.log(
      "I can access the variable of outer function: ",
      a + b + variable_outer_fun
    ); // This will work
  };

  InnerFunc();
};

outFunct();
