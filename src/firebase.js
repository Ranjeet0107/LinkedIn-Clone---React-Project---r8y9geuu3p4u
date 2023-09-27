// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";



 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
  apiKey: "AIzaSyAIxn44uYI3Nyc2DG_0ZXktNsnG80UmCpE",
  authDomain: "linkd-in-89b07.firebaseapp.com",
  projectId: "linkd-in-89b07",
  storageBucket: "linkd-in-89b07.appspot.com",
  messagingSenderId: "810937674040",
  appId: "1:810937674040:web:2cab048651c1a5700179cd",
  measurementId: "G-2Z4H1CEMH0"
};

  //this special line of code here connects everything
  const firebaseApp=firebase.initializeApp(firebaseConfig);
  //get the firebase databse
  const db=firebaseApp.firestore();
  const auth = firebase.auth();
  export { db,auth }
