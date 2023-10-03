
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAG3tCG1VeV58YVNx81zvfZVU8tH6TiNMk",
  authDomain: "netflix-clone-cbfdc.firebaseapp.com",
  projectId: "netflix-clone-cbfdc",
  storageBucket: "netflix-clone-cbfdc.appspot.com",
  messagingSenderId: "605087629779",
  appId: "1:605087629779:web:3114cc20141cb3510daf26"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);