// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAewC0HD-QXL2Ip8VF6AZoEK2De4ZyHHJs",
    authDomain: "artify-aaf38.firebaseapp.com",
    projectId: "artify-aaf38",
    storageBucket: "artify-aaf38.firebasestorage.app",
    messagingSenderId: "525016126681",
    appId: "1:525016126681:web:7ac4493619db7c9cc3dac8"
};

const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);
export default app;
