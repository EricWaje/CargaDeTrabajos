import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const app = firebase.initializeApp({
  apiKey: 'AIzaSyBeLu5JKe7JQKmtM7aUafiE0u8BsNQV3PU',
  authDomain: 'test-24728.firebaseapp.com',
  projectId: 'test-24728',
  storageBucket: 'test-24728.appspot.com',
  messagingSenderId: '829492956462',
  appId: '1:829492956462:web:67e10adad967ed1a5bbebf',
});

export const getFirebase = () => app;
export const getFirestore = () => firebase.firestore(app);
