import { createSelector } from '@reduxjs/toolkit';
import { stateType } from './types';

const selectCart = (state: stateType) => state.cart;
const selectUser = (state: stateType) => state.user;
const selectCollectionsReducer = (state: stateType) => state.collections;
export const selectCartItems = createSelector(selectCart, (cart) => cart.cartItems);
export const selectCurrentUser = createSelector(selectUser, (user) => user.currentUser);
export const selectCollections = createSelector(selectCollectionsReducer, (collections) => collections.collections);
export const selectSections = createSelector(selectCollectionsReducer, (collections) => collections.sections);
