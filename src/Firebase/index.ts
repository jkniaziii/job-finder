// Import the functions you need from the SDKs you need
import { rejects } from "assert";
import { initializeApp } from "firebase/app";
import {
    GoogleAuthProvider,
    getAuth,
    signInWithPopup,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
    signOut,
    sendEmailVerification,
} from "firebase/auth";
import { removeLocalStorage, setLocalStorage } from "../Utills";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD1sWmKp30D1C1PsitrxJMSPAWKwLnvFTw",
    authDomain: "job-finder-4e0fa.firebaseapp.com",
    projectId: "job-finder-4e0fa",
    storageBucket: "job-finder-4e0fa.appspot.com",
    messagingSenderId: "339370286444",
    appId: "1:339370286444:web:00e19df71e5149e35e6749",
    measurementId: "G-CPG980QTC2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await signInWithPopup(auth, googleProvider) as any;
            setLocalStorage('token', response.user.uid);
            resolve(response)
        } catch (err: any) {
            reject(err);
            console.error(err);
            alert(err.message);
        }
    })
};

const logInWithEmailAndPassword = async (email: string, password: string) => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await signInWithEmailAndPassword(auth, email, password) as any;
            setLocalStorage('token', response.user.uid);
            resolve(response);
        } catch (err: any) {
            console.error(err);
            alert(err.message);
        }
    })
};

const registerWithEmailAndPassword = async (name: string, email: string, password: string) => {

    return new Promise(async (resolve, reject) => {
        try {
            const response = await createUserWithEmailAndPassword(auth, email, password) as any;
            const res = await sendEmailVerification(response.user);
            console.log({response});
            setLocalStorage('token', response.user.uid);
            resolve(response);
        } catch (err: any) {
            console.error(err);
            alert(err.message);
        }
    })
};

const sendPasswordReset = async (email: string) => {
    try {
        await sendPasswordResetEmail(auth, email);
        alert("Password reset link sent!");
    } catch (err: any) {
        console.error(err);
        alert(err.message);
    }
};

const logout = async () => {
    return new Promise(async (resolve, reject) => {
        try {
            const res = await signOut(auth);
            removeLocalStorage('token');
            resolve(res)
        } catch (err: any) {
            console.error(err);
            alert(err.message);
        }
    })
};

export {
    auth,
    signInWithGoogle,
    logInWithEmailAndPassword,
    registerWithEmailAndPassword,
    sendPasswordReset,
    logout,
};