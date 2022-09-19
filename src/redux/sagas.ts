import { put, takeLatest, all, call } from 'typed-redux-saga/macro';
import { FirebaseError } from '@firebase/util';
import { fetchData, fetchInitialData, setCurrentUser } from './action';
import { ACTION_TYPES } from './actionTypes';
import { ActionWithPayload, AuthType, sectionType } from './types';
import getInitialData from '../data/section.data';
import getData from '../data/shop.data';
import {
  getCurrentUser,
  signOut,
  signInWithGoogle,
  signInWithEmailAndPassword,
  createAuthUserWithEmailAndPassword,
  createUserProfileDocument,
} from '../utils/fireBase';

function* fetchDataAsync() {
  try {
    const data = yield* call(getData);
    yield* put(fetchData(data));
  } catch (error) {
    console.log(error);
  }
}
function* fetchInitialDataAsync() {
  try {
    const data = yield* call(getInitialData);
    console.log(data);
    if (!data) return;
    data.sort((a: sectionType, b: sectionType) => a.id - b.id);
    yield* put(fetchInitialData(data));
  } catch (error) {
    console.log(error);
  }
}
function* setCurrentUserAsync() {
  try {
    const currentUser = yield* call(getCurrentUser);
    yield* put(setCurrentUser(currentUser));
  } catch (error) {
    console.log(error);
  }
}
function* setSigningOutAsync() {
  try {
    yield* call(signOut);
    yield* put(setCurrentUser(null));
  } catch (error) {
    console.log(error);
  }
}
function* setSigningInWithGoolgeAsync() {
  try {
    const { user } = yield* call(signInWithGoogle);
    yield* put(setCurrentUser(user));
  } catch (error) {
    console.log(error);
  }
}
function* setSigningInWithEmailAndPasswordAsync({
  payload: { email, password },
}: ActionWithPayload<ACTION_TYPES.START_SIGNING_IN_WITH_EMAIL_AND_PASSWORD, AuthType>) {
  try {
    const userCredential = yield* call(signInWithEmailAndPassword, email, password);
    if (userCredential) {
      const { user } = userCredential;
      yield* put(setCurrentUser(user));
    }
  } catch (error) {
    if (typeof error === 'string') {
      console.log(error);
    } else if (error instanceof FirebaseError) {
      switch (error.code) {
        case 'auth/wrong-password':
          alert(`The password that you've entered is incorrect`);
          break;
        case 'auth/user-not-found':
          alert(`The email address you entered isn't connected to an account`);
          break;
        default:
          console.log(error);
          break;
      }
    }
  }
}
function* setSigningUpAsync({ payload: { email, password, displayName } }: ActionWithPayload<ACTION_TYPES.START_SIGNING_UP, AuthType>) {
  try {
    const userCredential = yield* call(createAuthUserWithEmailAndPassword, email, password);
    if (userCredential) {
      const { user } = userCredential;
      if (user) {
        yield* call(createUserProfileDocument, user, { displayName });
        yield* put(setCurrentUser(user));
      }
    }
  } catch (error) {
    if (typeof error === 'string') {
      console.log(error);
    } else if (error instanceof FirebaseError) {
      switch (error.code) {
        case 'auth/email-already-in-use':
          alert('Cannot create user, email is already in use');
          break;
        default:
          console.log(error);
          break;
      }
    }
  }
}
function* onFetchInitialData() {
  yield* takeLatest(ACTION_TYPES.START_FETCHING_INITIAL_DATA, fetchInitialDataAsync);
}
function* onFetchData() {
  yield* takeLatest(ACTION_TYPES.START_FETCHING_DATA, fetchDataAsync);
}
function* onSetCurrentUser() {
  yield* takeLatest(ACTION_TYPES.START_SETTING_CURRENT_USER, setCurrentUserAsync);
}
function* onSigningOut() {
  yield* takeLatest(ACTION_TYPES.START_SIGNING_OUT, setSigningOutAsync);
}
function* onSigningInWithGoogle() {
  yield* takeLatest(ACTION_TYPES.START_SIGNING_IN_WITH_GOOGLE, setSigningInWithGoolgeAsync);
}
function* onSigningInWithEmailAndPassword() {
  yield* takeLatest(ACTION_TYPES.START_SIGNING_IN_WITH_EMAIL_AND_PASSWORD, setSigningInWithEmailAndPasswordAsync);
}
function* onSigningUp() {
  yield* takeLatest(ACTION_TYPES.START_SIGNING_UP, setSigningUpAsync);
}
function* rootSaga() {
  yield* all([
    call(onFetchInitialData),
    call(onFetchData),
    call(onSetCurrentUser),
    call(onSigningOut),
    call(onSigningInWithGoogle),
    call(onSigningInWithEmailAndPassword),
    call(onSigningUp),
  ]);
}
export default rootSaga;
