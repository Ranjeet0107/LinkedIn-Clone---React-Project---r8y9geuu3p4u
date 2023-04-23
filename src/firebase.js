// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";



 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAp-BpL7ZFRuwc0NRa8MzN2p-BMLaUFwa8",
  authDomain: "linkdin-e1147.firebaseapp.com",
  projectId: "linkdin-e1147",
  storageBucket: "linkdin-e1147.appspot.com",
  messagingSenderId: "644161989",
  appId: "1:644161989:web:bd29ef4173101cca216bac",
  measurementId: "G-ZJJPKN0H58"
};

  //this special line of code here connects everything
  const firebaseApp=firebase.initializeApp(firebaseConfig);
  //get the firebase databse
  const db=firebaseApp.firestore();
  const auth = firebase.auth();
  export { db,auth }
