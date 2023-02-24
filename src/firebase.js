// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyDtIRmatybfHSNjCas5zCm441pqns2vy60",
  authDomain: "linkdin-e8481.firebaseapp.com",
  projectId: "linkdin-e8481",
  storageBucket: "linkdin-e8481.appspot.com",
  messagingSenderId: "902237401733",
  appId: "1:902237401733:web:9a1f52d7dba4b0ad776fec",
  measurementId: "G-7QWJZE19J0"
  };
  //this special line of code here connects everything
  const firebaseApp=firebase.initializeApp(firebaseConfig);
  //get the firebase databse
  const db=firebaseApp.firestore();
  const auth = firebase.auth();
  export { db,auth }
