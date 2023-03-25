// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyCPJh5oCdtP3ol6D73uD977uttslqkz24M",
  authDomain: "linkdin-7bb83.firebaseapp.com",
  projectId: "linkdin-7bb83",
  storageBucket: "linkdin-7bb83.appspot.com",
  messagingSenderId: "211908686900",
  appId: "1:211908686900:web:e6b0aae120a789ac2a0661",
  measurementId: "G-NNB5JNJ4YK"
  };
  //this special line of code here connects everything
  const firebaseApp=firebase.initializeApp(firebaseConfig);
  //get the firebase databse
  const db=firebaseApp.firestore();
  const auth = firebase.auth();
  export { db,auth }
