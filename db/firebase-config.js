import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCCxzUC_0ZOd2tSQM5lqfdJ6qZP_Rl9JEw",
  authDomain: "tenth-player.firebaseapp.com",
  projectId: "tenth-player",
  storageBucket: "tenth-player.appspot.com",
  messagingSenderId: "376636287645",
  appId: "1:376636287645:web:53333d55c73184d1b4c274"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;