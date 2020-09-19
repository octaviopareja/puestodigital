import * as firebase from 'firebase/app';
import 'firebase/firestore';


const app = firebase.initializeApp({
    apiKey: "AIzaSyAKIWDWbCodwqkMYe1K2K_xKFbx1p9paFM",
    authDomain: "puesto-digital.firebaseapp.com",
    databaseURL: "https://puesto-digital.firebaseio.com",
    projectId: "puesto-digital",
    storageBucket: "puesto-digital.appspot.com",
    messagingSenderId: "93344873568",
    appId: "1:93344873568:web:20d7d6d310f63fc6ccd705",
   
   
});

export function getFirebase() {
    return app;
}

export function getFirestore() {
    return firebase.firestore(app);
}
/*

*/