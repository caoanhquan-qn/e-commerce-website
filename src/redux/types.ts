import { ACTION_TYPES } from './actionTypes';
import { User } from '@firebase/auth-types';
import { PersistConfig } from 'redux-persist';
import rootReducer from './reducer';
export type productType = {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
  quantity: number;
};

export type collectionType = {
  id: number;
  title: string;
  routeName: string;
  items: productType[];
};

export type sectionType = {
  title: string;
  imageUrl: string;
  size: string;
  id: number;
  linkUrl: string;
};

export type AuthType = {
  email: string;
  password: string;
  displayName?: string;
};

export type userType = {
  readonly currentUser: User | null;
};

export type cartType = {
  readonly cartItems: productType[];
};

export type collectionsType = {
  readonly collections: collectionType[];
  readonly sections: sectionType[];
};

export type rootReducerType = ReturnType<typeof rootReducer>;

export type persistConfigType = PersistConfig<rootReducerType> & {
  whitelist: (keyof rootReducerType)[];
};

export type additionalDataType = {
  displayName?: string;
};

export type Action<T extends string> = {
  type: T;
};

export type ActionWithPayload<T extends string, P> = {
  type: T;
  payload: P;
};

type addItemActionType = ActionWithPayload<ACTION_TYPES.ADD_ITEM, productType>;
type removeItemActionType = ActionWithPayload<ACTION_TYPES.REMOVE_ITEM, productType>;
type minusItemActionType = ActionWithPayload<ACTION_TYPES.MINUS_ITEM, productType>;
export type itemActionType = addItemActionType | removeItemActionType | minusItemActionType;
