
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite"


const firebaseConfig = {
  apiKey: "AIzaSyDn02UCA_TqjyC3a8zwZiBJIxlRaO2TLCU",
  authDomain: "tiktop-3369e.firebaseapp.com",
  projectId: "tiktop-3369e",
  storageBucket: "tiktop-3369e.appspot.com",
  messagingSenderId: "1093106565069",
  appId: "1:1093106565069:web:319ee92a241304b3d98e84",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
