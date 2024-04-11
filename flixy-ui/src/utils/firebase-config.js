import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBQyO2bAfc2DUIher2hcgIqb_ewVxguM_Y",
  authDomain: "flixy-ce42e.firebaseapp.com",
  projectId: "flixy-ce42e",
  storageBucket: "flixy-ce42e.appspot.com",
  messagingSenderId: "469121632591",
  appId: "1:469121632591:web:a35068c2db13f402f6dd3a",
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
