import * as firebase from "firebase";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyAjMvq7xHL9gbZYItwVQ7x9vSr3v80z1SE",
  authDomain: "farmhouse-ffd6a.firebaseapp.com",
  projectId: "farmhouse-ffd6a",
  storageBucket: "farmhouse-ffd6a.appspot.com",
  messagingSenderId: "22247757511",
  appId: "1:22247757511:web:4a3603e1ad1fca3224d0e2",
  databaseURL: "https://farmhouse-ffd6a.firebaseio.com",
  measurementId: "G-2WCR3HYCC3",
});
// firebase.initializeApp(app);
export const auth = app.auth();
export const firestore = firebase.firestore();
export default app;
