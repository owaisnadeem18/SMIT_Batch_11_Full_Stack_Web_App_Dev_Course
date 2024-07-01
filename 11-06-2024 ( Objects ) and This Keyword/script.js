// Objects In JavaScript

let obj = {
  name: "Owais Nadeem",
  F_Name: "Nadeem Akhtar ",
  Profession: " Student ",
  Area_of_Experty: " Front End Development",
  hobbies: ["coding", "eating", "empowering people"],
  University: {
    name: "Dawood University",
  },
};

// You can also delete the property of an object using delete keyword

delete obj.F_Name;

console.log(obj);

// You can also access the specific properties using:

console.log(obj.Area_of_Experty);

// If you want to check either any property or key is present in our object then we have to use (in) keyword for it

console.log("hobbies" in obj);
console.log("University" in obj);
