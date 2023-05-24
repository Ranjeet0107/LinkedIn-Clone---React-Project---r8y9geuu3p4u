// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";



 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
  apiKey: "AIzaSyC598LgsIJybCs6zzYzAFKHAkezsodvLGY",
  authDomain: "link-7fe05.firebaseapp.com",
  projectId: "link-7fe05",
  storageBucket: "link-7fe05.appspot.com",
  messagingSenderId: "774835480163",
  appId: "1:774835480163:web:58fa43ceb6d9da802efa56",
  measurementId: "G-CJMH02LR0L"
};

  //this special line of code here connects everything
  const firebaseApp=firebase.initializeApp(firebaseConfig);
  //get the firebase databse
  const db=firebaseApp.firestore();
  const auth = firebase.auth();
  export { db,auth }
