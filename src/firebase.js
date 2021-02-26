import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDWwDyfEWieR9ST6OGUwA_AoGTjkFfizLI",
    authDomain: "apoyo-app-ee2e3.firebaseapp.com",
    projectId: "apoyo-app-ee2e3",
    storageBucket: "apoyo-app-ee2e3.appspot.com",
    messagingSenderId: "591086491477",
    appId: "1:591086491477:web:5f1cea506b175c4f6a41dc"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };