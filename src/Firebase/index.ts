// Import the functions you need from the SDKs you need
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
    try {
        const res = await signInWithPopup(auth, googleProvider);
        const user = res.user;
    } catch (err: any) {
        console.error(err);
        alert(err.message);
    }
};
const logInWithEmailAndPassword = async (email: string, password: string) => {
    try {
        const response = await signInWithEmailAndPassword(auth, email, password);
        console.log({ response });
    } catch (err: any) {
        console.error(err);
        alert(err.message);
    }
};
const registerWithEmailAndPassword = async (name: string, email: string, password: string) => {
    try {
        return new Promise(async (resolve, reject) => {
            const user = await createUserWithEmailAndPassword(auth, email, password) as any;
            const res = await sendEmailVerification(user.user);
            resolve(user);
        })
    } catch (err: any) {
        console.error(err);
        alert(err.message);
    }
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
const logout = () => {
    signOut(auth);
};
export {
    auth,
    signInWithGoogle,
    logInWithEmailAndPassword,
    registerWithEmailAndPassword,
    sendPasswordReset,
    logout,
};