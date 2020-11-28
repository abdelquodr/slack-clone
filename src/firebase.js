import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAP69af-XnJP-1N2qvTp8TY-kaSH74BZ_Y",
    authDomain: "slack-clone-2302b.firebaseapp.com",
    databaseURL: "https://slack-clone-2302b.firebaseio.com",
    projectId: "slack-clone-2302b",
    storageBucket: "slack-clone-2302b.appspot.com",
    messagingSenderId: "17642069252",
    appId: "1:17642069252:web:8ef4866190a06397d58451",
    measurementId: "G-4GZSY29063"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;