// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";



 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDym6BeDDMEXssW7kQiN_6umcuFAViCOR8",
  authDomain: "linkdin-clon-8209f.firebaseapp.com",
  projectId: "linkdin-clon-8209f",
  storageBucket: "linkdin-clon-8209f.appspot.com",
  messagingSenderId: "304057636718",
  appId: "1:304057636718:web:3e320c86b47b9a16e2537f",
  measurementId: "G-9DTC9ZSXX1"
};

  //this special line of code here connects everything
  const firebaseApp=firebase.initializeApp(firebaseConfig);
  //get the firebase databse
  const db=firebaseApp.firestore();
  const auth = firebase.auth();
  export { db,auth }
