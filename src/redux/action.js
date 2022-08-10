import {
  FETCH_DATA,
  SET_CURRENT_USER,
  ADD_ITEM,
  REMOVE_ITEM,
  MINUS_ITEM,
  FETCH_INITIAL_DATA,
  START_FETCHING_DATA,
  START_FETCHING_INITIAL_DATA,
  START_SETTING_CURRENT_USER,
  START_SIGNING_OUT,
  START_SIGNING_IN_WITH_GOOGLE,
  START_SIGNING_IN_WITH_EMAIL_AND_PASSWORD,
  START_SIGNING_UP,
} from './actionTypes';

export const setCurrentUser = (user) => ({
  type: SET_CURRENT_USER,
  payload: user,
});

export const addItem = (productToAdd) => ({
  type: ADD_ITEM,
  payload: productToAdd,
});

export const removeItem = (productToRemove) => ({
  type: REMOVE_ITEM,
  payload: productToRemove,
});

export const minusItem = (productToRemove) => ({
  type: MINUS_ITEM,
  payload: productToRemove,
});

export const fetchData = (collections) => ({
  type: FETCH_DATA,
  payload: collections,
});

export const fetchInitialData = (data) => ({ type: FETCH_INITIAL_DATA, payload: data });
export const startFetchingData = () => ({ type: START_FETCHING_DATA });
export const startFetchingInitialData = () => ({ type: START_FETCHING_INITIAL_DATA });
export const startSettingCurrentUser = () => ({ type: START_SETTING_CURRENT_USER });
export const startSigningOut = () => ({ type: START_SIGNING_OUT });
export const startSigningInWithGoogle = () => ({ type: START_SIGNING_IN_WITH_GOOGLE });
export const startSigningInWithEmailAndPassword = ({ email, password }) => ({
  type: START_SIGNING_IN_WITH_EMAIL_AND_PASSWORD,
  payload: { email, password },
});
export const startSigningUp = ({ email, password, displayName }) => ({ type: START_SIGNING_UP, payload: { email, password, displayName } });
