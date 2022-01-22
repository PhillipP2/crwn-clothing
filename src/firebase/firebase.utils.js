import { initializeApp } from 'firebase/app';
import { doc, getDoc, setDoc, getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const config = {
  apiKey: "AIzaSyCsdfP1PrnLK1MKmbeOwSRSnIGSwvKuMmM",
  authDomain: "crwn-clothing-db-f49e7.firebaseapp.com",
  projectId: "crwn-clothing-db-f49e7",
  storageBucket: "crwn-clothing-db-f49e7.appspot.com",
  messagingSenderId: "263712838183",
  appId: "1:263712838183:web:97e98ad2b0cfea25443402",
  measurementId: "G-K4CG5KE00E"
};
initializeApp(config);

// Auth export
export const auth = getAuth();
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => {
  return signInWithPopup(auth, provider);
}

// Firestore export
export const db = getFirestore();
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = doc(db, `users/${userAuth.uid}`);
  const snapShot = await getDoc(userRef);

  if (!snapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userRef, {
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }
  return userRef;
}

export {
  onAuthStateChanged, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  updateProfile,
  signOut
} from 'firebase/auth';

export { onSnapshot } from 'firebase/firestore';