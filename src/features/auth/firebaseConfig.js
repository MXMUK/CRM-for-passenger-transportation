// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider, getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDCae-250X8Z0pHaHsWv4YAfnePhuSZJEo',
  authDomain: 'crm-passenger-transporta-fecb5.firebaseapp.com',
  projectId: 'crm-passenger-transporta-fecb5',
  storageBucket: 'crm-passenger-transporta-fecb5.appspot.com',
  messagingSenderId: '1032953081459',
  appId: '1:1032953081459:web:5944ea48c4ead05a684406'
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
