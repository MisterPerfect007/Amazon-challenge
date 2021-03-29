import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDoPjChuzAJ4UrDAwcY10vftpf-uSxs2b4",
    authDomain: "challenge-565cb.firebaseapp.com",
    projectId: "challenge-565cb",
    storageBucket: "challenge-565cb.appspot.com",
    messagingSenderId: "726392902360",
    appId: "1:726392902360:web:f18bc608b781ef3c1c3dad",
    measurementId: "G-B0VP2ZZT98"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };