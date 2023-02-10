import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA8UWNaCCx-L3m5PkVXQM4UvyloiRtvYbo",
  authDomain: "gwada-quiz-d532f.firebaseapp.com",
  projectId: "gwada-quiz-d532f",
  storageBucket: "gwada-quiz-d532f.appspot.com",
  messagingSenderId: "987354248317",
  appId: "1:987354248317:web:d2b399de199a5f95946d14",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export default app;
