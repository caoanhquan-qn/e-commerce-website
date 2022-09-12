import { sectionType, productType, collectionType, AuthType, itemActionType } from './types';
import { actionCreator } from './utils';
import { ACTION_TYPES } from './actionTypes';

export const setCurrentUser = (user: object | null) => ({
  type: ACTION_TYPES.SET_CURRENT_USER,
  payload: user,
});

export const addItem = (productToAdd: productType): itemActionType => actionCreator(ACTION_TYPES.ADD_ITEM, productToAdd);
export const removeItem = (productToRemove: productType): itemActionType => actionCreator(ACTION_TYPES.REMOVE_ITEM, productToRemove);
export const minusItem = (productToRemove: productType): itemActionType => actionCreator(ACTION_TYPES.MINUS_ITEM, productToRemove);

export const fetchData = (collections: collectionType[]) => ({
  type: ACTION_TYPES.FETCH_DATA,
  payload: collections,
});

export const fetchInitialData = (data: sectionType[]) => actionCreator(ACTION_TYPES.FETCH_INITIAL_DATA, data);
export const startFetchingData = () => actionCreator(ACTION_TYPES.START_FETCHING_DATA);
export const startFetchingInitialData = () => actionCreator(ACTION_TYPES.START_FETCHING_INITIAL_DATA);
export const startSettingCurrentUser = () => actionCreator(ACTION_TYPES.START_SETTING_CURRENT_USER);
export const startSigningOut = () => actionCreator(ACTION_TYPES.START_SIGNING_OUT);
export const startSigningInWithGoogle = () => actionCreator(ACTION_TYPES.START_SIGNING_IN_WITH_GOOGLE);
export const startSigningInWithEmailAndPassword = ({ email, password }: AuthType) =>
  actionCreator(ACTION_TYPES.START_SIGNING_IN_WITH_EMAIL_AND_PASSWORD, { email, password });
export const startSigningUp = ({ email, password, displayName }: AuthType) =>
  actionCreator(ACTION_TYPES.START_SIGNING_UP, { email, password, displayName });
