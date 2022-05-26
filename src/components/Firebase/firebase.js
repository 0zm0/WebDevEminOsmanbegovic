// Import the functions you need from the SDKs you need
import  firebase from  'firebase/compat/app'
import 'firebase/compat/auth' 
import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const app = firebase.initializeApp({
  apiKey: "AIzaSyAfhFL-E3_nZqtPNPMFIZXyXwSkbzhhCiM",
  authDomain: "web-dev-project-4f052.firebaseapp.com",
  projectId: "web-dev-project-4f052",
  storageBucket: "web-dev-project-4f052.appspot.com",
  messagingSenderId: "255784226914",
  appId: "1:255784226914:web:5382dfb59ba387ff99813b",
  measurementId: "G-6QSBQ6T5L2"
})

// Initialize Firebase


//const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

export const auth  = app.auth();

export default app;