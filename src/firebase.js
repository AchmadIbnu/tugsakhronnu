 import firebase from 'firebase';
 import "firebase/auth"
 
 var firebaseApp = firebase.initializeApp({
 	apiKey: "AIzaSyDPYwH2zSaczX9HD8y1899t3SvqvZr2e24",
 	authDomain: "listrik-meter.firebaseapp.com",
 	databaseURL: "https://listrik-meter-default-rtdb.firebaseio.com",
 	projectId: "listrik-meter",
 	storageBucket: "listrik-meter.appspot.com",
 	messagingSenderId: "159987055646",
 	appId: "1:159987055646:web:ff76af2db069cfb0dec20f",
 	measurementId: "G-R9TB477H0L",
 });
  // Initialize Firebase
  const db = firebase.firestore()
  const auth = firebase.auth()
  const storage = firebase.storage()
  const realtime = firebase.database()

  export {db, auth, storage, realtime};
  export default firebaseApp