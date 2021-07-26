import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyB6_1BnPM-6Qkf39doQAWlZIN64lloyn_Q",
    authDomain: "crwn-clothing-457d3.firebaseapp.com",
    projectId: "crwn-clothing-457d3",
    storageBucket: "crwn-clothing-457d3.appspot.com",
    messagingSenderId: "356045416554",
    appId: "1:356045416554:web:7b938b5e77af57bac80213"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();

  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();

  provider.setCustomParameters({propt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;