import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-app.js";

import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "https://www.gstatic.com/firebasejs/9.1.3/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAwgOptNno1r8EQQt3MwClGbVNv1vPcr7A",
  authDomain: "authenticator-1c70f.firebaseapp.com",
  projectId: "authenticator-1c70f",
  storageBucket: "authenticator-1c70f.appspot.com",
  messagingSenderId: "786324371631",
  appId: "1:786324371631:web:e1ade55300f2db564bfc5a",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {
  app,
  auth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
};
