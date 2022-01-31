import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    //your config
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)