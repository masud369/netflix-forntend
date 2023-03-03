
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCImxFfYOAWCGQrEpry_qbEsiqRv6coQ78",
  authDomain: "netflex-clone-b4a86.firebaseapp.com",
  projectId: "netflex-clone-b4a86",
  storageBucket: "netflex-clone-b4a86.appspot.com",
  messagingSenderId: "426286303403",
  appId: "1:426286303403:web:316269b195cba645e00fee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);