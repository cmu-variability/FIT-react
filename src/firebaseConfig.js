// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBw-Xyyr4Zp_QPATN-ONnxx73c0zVzboZM",
    authDomain: "fit-react-6fefb.firebaseapp.com",
    projectId: "fit-react-6fefb",
    storageBucket: "fit-react-6fefb.appspot.com",
    messagingSenderId: "547256975599",
    appId: "1:547256975599:web:3fac54a43a5a666bf19b1a",
    measurementId: "G-N80PSJQDCX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);


export const checkLoginCredentials = async (username, password) => {
    try {
      const userDocRef = doc(firestore, `Users/${username}`);
      const userDoc = await getDoc(userDocRef);
  
      if (userDoc.exists()) {
        const userData = userDoc.data();
        if (userData.password === password) {
          return { valid: true, group: userData.group };
        }
      }
      return { valid: false };
    } catch (error) {
      console.error('Error checking login credentials:', error);
      return { valid: false };
    }
  };