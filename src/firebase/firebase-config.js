import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD1nyr0wu1YtZ5uE9GxF5qVp_c8ea9SDLY",
  authDomain: "eventure-615c8.firebaseapp.com",
  projectId: "eventure-615c8",
  storageBucket: "eventure-615c8.appspot.com",
  messagingSenderId: "895967985464",
  appId: "1:895967985464:web:6505c14d50457c7d4c4bcd",
  measurementId: "G-6LNLJXQV9D",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
