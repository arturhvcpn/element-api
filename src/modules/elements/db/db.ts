import 'dotenv/config';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../../../config/firebase';
import { getFirestore } from "firebase/firestore";

const firebaseConfigurationApplication = initializeApp(firebaseConfig);
export const firestoreDB = getFirestore(firebaseConfigurationApplication);