import { createSelector } from '@reduxjs/toolkit';
import { rootReducerType } from './types';

const selectCart = (state: rootReducerType) => state.cart;
const selectUser = (state: rootReducerType) => state.user;
const selectCollectionsReducer = (state: rootReducerType) => state.collections;
export const selectCartItems = createSelector(selectCart, (cart) => cart.cartItems);
export const selectCurrentUser = createSelector(selectUser, (user) => user.currentUser);
export const selectCollections = createSelector(selectCollectionsReducer, (collections) => collections.collections);
export const selectSections = createSelector(selectCollectionsReducer, (collections) => collections.sections);
