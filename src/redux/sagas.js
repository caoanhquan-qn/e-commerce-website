import { put, takeLatest, all, call } from 'redux-saga/effects';
import { fetchData, fetchInitialData, setCurrentUser } from './action';
import {
  START_FETCHING_DATA,
  START_FETCHING_INITIAL_DATA,
  START_SETTING_CURRENT_USER,
  START_SIGNING_IN_WITH_EMAIL_AND_PASSWORD,
  START_SIGNING_IN_WITH_GOOGLE,
  START_SIGNING_OUT,
  START_SIGNING_UP,
} from './actionTypes';
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
    const data = yield call(getData);
    yield put(fetchData(data));
  } catch (error) {
    console.log(error);
  }
}
function* fetchInitialDataAsync() {
  try {
    const data = yield call(getInitialData);
    data.sort((a, b) => a.id - b.id);
    yield put(fetchInitialData(data));
  } catch (error) {
    console.log(error);
  }
}
function* setCurrentUserAsync() {
  try {
    const currentUser = yield call(getCurrentUser);
    yield put(setCurrentUser(currentUser));
  } catch (error) {
    console.log(error);
  }
}
function* setSigningOutAsync() {
  try {
    yield call(signOut);
    yield put(setCurrentUser(null));
  } catch (error) {
    console.log(error);
  }
}
function* setSigningInWithGoolgeAsync() {
  try {
    const { user } = yield call(signInWithGoogle);
    yield put(setCurrentUser(user));
  } catch (error) {
    console.log(error);
  }
}
function* setSigningInWithEmailAndPasswordAsync({ payload: { email, password } }) {
  try {
    const { user } = yield call(signInWithEmailAndPassword, email, password);
    yield put(setCurrentUser(user));
  } catch (error) {
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
function* setSigningUpAsync({ payload: { email, password, displayName } }) {
  try {
    const { user } = yield call(createAuthUserWithEmailAndPassword, email, password);
    const userRef = yield call(createUserProfileDocument, user, { displayName });
    const userSnapShot = yield userRef.get();
    const userDoc = yield userSnapShot.data();
    yield put(setCurrentUser(userDoc));
  } catch (error) {
    if (error.code === 'auth/email-already-in-use') {
      alert('Cannot create user, email is already in use');
    } else {
      console.log(error);
    }
  }
}
function* onFetchInitialData() {
  yield takeLatest(START_FETCHING_INITIAL_DATA, fetchInitialDataAsync);
}
function* onFetchData() {
  yield takeLatest(START_FETCHING_DATA, fetchDataAsync);
}
function* onSetCurrentUser() {
  yield takeLatest(START_SETTING_CURRENT_USER, setCurrentUserAsync);
}
function* onSigningOut() {
  yield takeLatest(START_SIGNING_OUT, setSigningOutAsync);
}
function* onSigningInWithGoogle() {
  yield takeLatest(START_SIGNING_IN_WITH_GOOGLE, setSigningInWithGoolgeAsync);
}
function* onSigningInWithEmailAndPassword() {
  yield takeLatest(START_SIGNING_IN_WITH_EMAIL_AND_PASSWORD, setSigningInWithEmailAndPasswordAsync);
}
function* onSigningUp() {
  yield takeLatest(START_SIGNING_UP, setSigningUpAsync);
}
function* rootSaga() {
  yield all([
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
