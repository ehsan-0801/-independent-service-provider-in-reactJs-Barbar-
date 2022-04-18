// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from 'firebase/auth';
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC2S4OqpL4anCm3S4PVycxe32-xTR9LslI",
    authDomain: "mr-x-the-barbar.firebaseapp.com",
    projectId: "mr-x-the-barbar",
    storageBucket: "mr-x-the-barbar.appspot.com",
    messagingSenderId: "431986068008",
    appId: "1:431986068008:web:456dff5e5d46a2da8b431d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;