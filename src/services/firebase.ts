import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyC8tou25X9zuBMZJOSp9qbdkqi_bKHQeEA",
    authDomain: "telzir-loldesign.firebaseapp.com",
    projectId: "telzir-loldesign",
    storageBucket: "telzir-loldesign.appspot.com",
    messagingSenderId: "461365965600",
    appId: "1:461365965600:web:86a187505a163a6735dd45"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)