import {
  auth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "./firebase.js";

onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("User is present : ", user);
  } else {
    console.log("User is not present : ");
  }
});

let signUp = () => {
  let email = document.getElementById("email");
  let password = document.getElementById("pass");

  createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((res) => {
      console.log("User : ", res.user);
    })
    .catch((error) => {
      console.log("error :", error.code);
    });
};

// Sign Out functionality

let logOut = () => {
  signOut(auth)
    .then((res) => {
      console.log("User Signed Out ! ");
    })
    .catch((error) => {
      // An error happened.
    });
};

let signUpBtn = document.getElementById("signUpBtn");

signUpBtn.addEventListener("click", signUp);

// Accessing logOut btn

let LogOutBtn = document.getElementById("LogOut");

LogOutBtn.addEventListener("click", logOut);
