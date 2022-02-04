import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyA189uJuqvK1ApO98sYZnQ9uhwwZnYnu64',
  authDomain: 'slack-clone-4ef3e.firebaseapp.com',
  projectId: 'slack-clone-4ef3e',
  storageBucket: 'slack-clone-4ef3e.appspot.com',
  messagingSenderId: '822170568705',
  appId: '1:822170568705:web:4a6f1fb7f546dfcef49800',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
