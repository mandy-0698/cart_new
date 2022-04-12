// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCLTUx56IM9z5JIs59iwOv9ow_LNQf7HE",
  authDomain: "cart-ec7de.firebaseapp.com",
  projectId: "cart-ec7de",
  storageBucket: "cart-ec7de.appspot.com",
  messagingSenderId: "722380488047",
  appId: "1:722380488047:web:5e88c10c7da75ac1a0fc9a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
export { firestore };
