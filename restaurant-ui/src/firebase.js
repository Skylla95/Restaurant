import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const app = firebase.initializeApp({
  apiKey: "AIzaSyDbfywKK7hruMBBihykbCDcoTEDxVv8UT0",
  authDomain: "restauratn-ui.firebaseapp.com",
  projectId: "restauratn-ui",
  storageBucket: "restauratn-ui.appspot.com",
  messagingSenderId: "142593868588",
  appId: "1:142593868588:web:d8e6aeee1bf270f5b4a289",
  measurementId: "G-JKBP3VCMV9",
});

export const auth = app.auth()
export default app;