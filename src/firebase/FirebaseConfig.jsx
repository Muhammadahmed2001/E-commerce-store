import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCr55yimHyPr7bV9MfnHF4xvAzwU8WV0N4",
  authDomain: "e-commerce-c8f51.firebaseapp.com",
  projectId: "e-commerce-c8f51",
  storageBucket: "e-commerce-c8f51.appspot.com",
  messagingSenderId: "296321995682",
  appId: "1:296321995682:web:0ae7c35179eeac546e58fb"
};


const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app)
const auth = getAuth(app)
export {
    fireDB,
    auth,
}
