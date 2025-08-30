import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBlkIbIFRb-zqSNkjQ85Vl98vLyi1IN5BQ",
  authDomain: "starter-fireb-app.firebaseapp.com",
  projectId: "starter-fireb-app",
  storageBucket: "starter-fireb-app.appspot.com",
  messagingSenderId: "99847643822",
  appId: "1:99847643822:web:3dad53f8c91730ba24833f",
  measurementId: "G-0S95ERESS5",
};

// Initialize
const app = initializeApp(firebaseConfig);

// Export Auth
export const auth = getAuth(app);
