import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyB014C2p2TwAyGi2XEJ1d0UYdAJibeSX30",
    authDomain: "readinglistapp-58e72.firebaseapp.com",
    projectId: "readinglistapp-58e72",
    storageBucket: "readinglistapp-58e72.appspot.com",
    messagingSenderId: "480867275371",
    appId: "1:480867275371:web:0ff03b526e7556aa47d72e"
  };

  //init firebase
  initializeApp(firebaseConfig);

  //init firestore
  const db = getFirestore();

  //init firebase auth
  const auth = getAuth();

  export { db, auth }