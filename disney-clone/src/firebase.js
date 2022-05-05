import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyDZKhaUlGJTM3Q2hQ95eJA_hMFqcJy9i14",
    authDomain: "disney-plus-clone-b4720.firebaseapp.com",
    projectId: "disney-plus-clone-b4720",
    storageBucket: "disney-plus-clone-b4720.appspot.com",
    messagingSenderId: "633049482184",
    appId: "1:633049482184:web:b2de272099bd62f798b6fd",
    measurementId: "G-N25KH466ZJ"
};
  
const app = initializeApp(firebaseConfig);
const db = getDatabase(app)
const auth = getAuth(app)

export {auth, app}
export default db;