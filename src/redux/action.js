import { FETCH_DATA, SET_CURRENT_USER, ADD_ITEM, REMOVE_ITEM, MINUS_ITEM, FETCH_INITIAL_DATA } from './actionTypes';

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
