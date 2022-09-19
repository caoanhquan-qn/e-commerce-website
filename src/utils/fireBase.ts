import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { User } from '@firebase/auth-types';
import { additionalDataType } from '../redux/types';

const config = {
  apiKey: `${process.env.REACT_APP_GOOGLE_API_KEY}`,
  authDomain: 'clothing-db-2022.firebaseapp.com',
  projectId: 'clothing-db-2022',
  storageBucket: 'clothing-db-2022.appspot.com',
  messagingSenderId: '8284649763',
  appId: '1:8284649763:web:27a36bdbadffa8342fb496',
};

export const createUserProfileDocument = async (userAuth: User, additionalData?: additionalDataType) => {
  const userRef = firestore.doc(`/users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        createdAt,
        displayName,
        email,
        ...additionalData,
      });
    } catch (e) {
      if (typeof e === 'string') {
        console.log(e);
      } else if (e instanceof Error) {
        console.log(e.message);
      }
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth(); // singleton
export const firestore = firebase.firestore();

const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: 'select_account',
});

export const createAuthUserWithEmailAndPassword = async (email: string, password: string) => {
  if (!email || !password) return;
  return await auth.createUserWithEmailAndPassword(email, password);
};
export const signInWithGoogle = async () => await auth.signInWithPopup(googleProvider);
export const signInWithGoogleRedirect = async () => await auth.signInWithRedirect(googleProvider);
export const signInWithEmailAndPassword = async (email: string, password: string) => {
  if (!email || !password) return;
  return await auth.signInWithEmailAndPassword(email, password);
};
export const signOut = async () => await auth.signOut();
export const getCurrentUser = (): Promise<User | null> => {
  return new Promise((resolve, reject) => {
    const unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      unsubscribeFromAuth();
      resolve(user);
    }, reject);
  });
};
export default firebase;
