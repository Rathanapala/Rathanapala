// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAVrLsAndAmixjsdqN56rGgyw3Hx2ITy9E",
    authDomain: "dahampasal-9ca0e.firebaseapp.com",
    projectId: "dahampasal-9ca0e",
    storageBucket: "dahampasal-9ca0e.firebasestorage.app",
    messagingSenderId: "769908659364",
    appId: "1:769908659364:web:94b0d5f8757d25c6dbc231",
    measurementId: "G-RX31NTJRVG"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
//const firebaseAnalytics = getAnalytics(firebaseApp);


export default firebaseApp;
//export { firebaseAnalytics as analytics };
