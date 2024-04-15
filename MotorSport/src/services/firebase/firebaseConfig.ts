import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCaikN7p0tT4EdQ2xNFfENsjaqS43x24-k",
    authDomain: "motorsport-f6e69.firebaseapp.com",
    projectId: "motorsport-f6e69",
    storageBucket: "motorsport-f6e69.appspot.com",
    messagingSenderId: "769462630750",
    appId: "1:769462630750:web:19c423fa56bb877e5af7cf"
  };

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const auth = getAuth(app)

export { db, auth }