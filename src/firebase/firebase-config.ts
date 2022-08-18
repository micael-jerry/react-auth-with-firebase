import {initializeApp} from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
    // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    // appId: process.env.REACT_APP_FIREBASE_APP_ID
    apiKey: "AIzaSyCwvIIS5GJ1ilr5pBp97awUvw3iZUHcYXo",
    authDomain: "fir-auth-eb17a.firebaseapp.com",
    projectId: "fir-auth-eb17a",
    storageBucket: "fir-auth-eb17a.appspot.com",
    messagingSenderId: "1060777772912",
    appId: "1:1060777772912:web:45193512a2e985ec1cf1b5"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
