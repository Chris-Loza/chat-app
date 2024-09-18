import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "chat-app-dc171.firebaseapp.com",
  projectId: "chat-app-dc171",
  storageBucket: "chat-app-dc171.appspot.com",
  messagingSenderId: "435308284022",
  appId: "1:435308284022:web:53a0471e695aa111fef757",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
