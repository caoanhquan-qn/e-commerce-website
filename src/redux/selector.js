import { createSelector } from '@reduxjs/toolkit';

const selectCart = (state) => state.cart;
const selectUser = (state) => state.user;
const selectCollectionsReducer = (state) => state.collections;
export const selectCartItems = createSelector(selectCart, (cart) => cart.cartItems);
export const selectCurrentUser = createSelector(selectUser, (user) => user.currentUser);
export const selectCollections = createSelector(selectCollectionsReducer, (collections) => collections.collections);
