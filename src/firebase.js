import firebase from 'firebase/app';
import 'firebase/firestore';

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyCq7YXET1Zaq7flFtaZYXygLyTAcAVgUEs",
    authDomain: "clothes-be300.firebaseapp.com",
    databaseURL: "https://clothes-be300.firebaseio.com",
    projectId: "clothes-be300",
    storageBucket: "clothes-be300.appspot.com",
    messagingSenderId: "976040636989",
    appId: "1:976040636989:web:bb44ab25c05c8286d47054",
    measurementId: "G-KSCX5KZ9DQ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//   firebase.analytics();

export default firebase;