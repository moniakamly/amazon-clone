import firebase from "firebase"; 

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC8QlyNXlr2EcTkij5DzIzjufqYCvxUUlY",
    authDomain: "clone-9cacb.firebaseapp.com",
    databaseURL: "https://clone-9cacb.firebaseio.com",
    projectId: "clone-9cacb",
    storageBucket: "clone-9cacb.appspot.com",
    messagingSenderId: "1016889039535",
    appId: "1:1016889039535:web:1f2c21f245441df30e125a",
    
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore(); 
  const auth = firebase.auth();

  export { db, auth }; 