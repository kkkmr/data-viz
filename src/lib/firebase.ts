import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCC5tCyxlKsxbrLMr1E-FQ3DAqELk3Agd8",
  authDomain: "data-viz-f9b33.firebaseapp.com",
  projectId: "data-viz-f9b33",
  storageBucket: "data-viz-f9b33.firebasestorage.app",
  messagingSenderId: "1081421182175",
  appId: "1:1081421182175:web:5e095511640b7141dae56a",
  measurementId: "G-PG47Q910NC"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
