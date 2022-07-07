import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = {
  apiKey: 'AIzaSyDrJweqaPEnOznQ_aazWB1ad6a6D8H1AfY',
  authDomain: 'clothing-db-2022.firebaseapp.com',
  projectId: 'clothing-db-2022',
  storageBucket: 'clothing-db-2022.appspot.com',
  messagingSenderId: '8284649763',
  appId: '1:8284649763:web:27a36bdbadffa8342fb496',
};

export const createUserProfileDocument = async (userAuth, additionalData = {}) => {
  if (!userAuth) return;
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
    } catch (error) {
      console.error(error.message);
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

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await auth.createUserWithEmailAndPassword(email, password);
};
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);
export const signInWithGoogleRedirect = () => auth.signInWithRedirect(googleProvider);
export const signInWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await auth.signInWithEmailAndPassword(email, password);
};
export default firebase;
