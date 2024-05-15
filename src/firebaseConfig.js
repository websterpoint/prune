import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBceYtkM6I4i1LLtbstidQ4-i8CAfsve28",
  authDomain: "prune-94ad9.firebaseapp.com",
  projectId: "prune-94ad9",
  storageBucket: "prune-94ad9.appspot.com",
  messagingSenderId: "964726998539",
  appId: "1:964726998539:web:b908661d1df1514374690e",
  measurementId: "G-Z5B6KECB5W",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db };

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBceYtkM6I4i1LLtbstidQ4-i8CAfsve28",
//   authDomain: "prune-94ad9.firebaseapp.com",
//   projectId: "prune-94ad9",
//   storageBucket: "prune-94ad9.appspot.com",
//   messagingSenderId: "964726998539",
//   appId: "1:964726998539:web:b908661d1df1514374690e",
//   measurementId: "G-Z5B6KECB5W"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
