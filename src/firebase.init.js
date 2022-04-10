// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDVimtbf5xejecC0MNJL03l14kgU9rHwak',
  authDomain: 'react-genius-car-services.firebaseapp.com',
  projectId: 'react-genius-car-services',
  storageBucket: 'react-genius-car-services.appspot.com',
  messagingSenderId: '617848258747',
  appId: '1:617848258747:web:52d66c1a2eeb22bb78299e',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
