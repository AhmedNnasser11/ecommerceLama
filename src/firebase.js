import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {

    apiKey: "AIzaSyCs-roa2BMZKDj4udR2TZ__t6lhZIvNOK8",
  
    authDomain: "ecommerce-react-d751d.firebaseapp.com",
  
    projectId: "ecommerce-react-d751d",
  
    storageBucket: "ecommerce-react-d751d.appspot.com",
  
    messagingSenderId: "420385439352",
  
    appId: "1:420385439352:web:4e33ef54907cd6207bb78d",
  
    measurementId: "G-2PQB6YZZSJ"
  
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  const auth = firebase.auth();

  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};

  export default db;