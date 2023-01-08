import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
  apiKey: "AIzaSyBWZc5V8u79gXeiBnQHw4IqZSyzaOb1UO8",
  authDomain: "project71-928ad.firebaseapp.com",
  projectId: "project71-928ad",
  storageBucket: "project71-928ad.appspot.com",
  messagingSenderId: "708275952522",
  appId: "1:708275952522:web:9f90994d3fe06e80ef0673"
};
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
