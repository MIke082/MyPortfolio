import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyB9cBJNV2sXVT7BgAbbEL-B-epduStXIOE",
    authDomain: "portfolio-7baf9.firebaseapp.com",
    projectId: "portfolio-7baf9",
    storageBucket: "portfolio-7baf9.appspot.com",
    messagingSenderId: "975200191380",
    appId: "1:975200191380:web:b91e77e27c00edc19b4581",
    measurementId: "G-GMJJXFD88J"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { auth, db };
