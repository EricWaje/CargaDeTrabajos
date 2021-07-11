import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const app = firebase.initializeApp({
  apiKey: 'AIzaSyBuQXojvYUSXXo0GlFf_0BpwkrvIYF8C_s',
  authDomain: 'test-beee0.firebaseapp.com',
  projectId: 'test-beee0',
  storageBucket: 'test-beee0.appspot.com',
  messagingSenderId: '91795770238',
  appId: '1:91795770238:web:2aa76844320100a86e812f',
});

export const getFirebase = () => app;
export const getFirestore = () => firebase.firestore(app);
