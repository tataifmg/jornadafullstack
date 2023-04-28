import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore/lite";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyCAfUmOfdAf3v-Y8nOCsdrL4E5k5udSTYk",
  authDomain: "jornadafullstack-2a971.firebaseapp.com",
  databaseURL: "https://jornadafullstack-2a971-default-rtdb.firebaseio.com",
  projectId: "jornadafullstack-2a971",
  storageBucket: "jornadafullstack-2a971.appspot.com",
  messagingSenderId: "632183839305",
  appId: "1:632183839305:web:d99132b7dfa31ca7c8fd98",
  measurementId: "G-L0GC4D5494"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;