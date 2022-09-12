import { combineReducers, AnyAction } from 'redux';
import { ACTION_TYPES } from './actionTypes';
import { userType, productType, cartType, collectionsType, itemActionType } from './types';

const initialUserState: userType = { currentUser: null };
const userReducer = (state = initialUserState, action: AnyAction) => {
  switch (action.type) {
    case ACTION_TYPES.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      return state;
  }
};

const initialCartState: cartType = { cartItems: [] };
const cartReducer = (state = initialCartState, action: itemActionType): cartType => {
  switch (action.type) {
    case ACTION_TYPES.ADD_ITEM:
      const cartItem = state.cartItems.find((item: productType) => item.id === action.payload.id);
      if (cartItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((item: productType) => (item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item)),
        };
      }
      return {
        ...state,
        cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
      };
    case ACTION_TYPES.REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter((item: productType) => item.id !== action.payload.id),
      };
    case ACTION_TYPES.MINUS_ITEM:
      if (action.payload.quantity > 1) {
        return {
          ...state,
          cartItems: state.cartItems.map((item: productType) => (item.id === action.payload.id ? { ...item, quantity: item.quantity - 1 } : item)),
        };
      }
      return {
        ...state,
        cartItems: state.cartItems.filter((item: productType) => item.id !== action.payload.id),
      };
    default:
      return state;
  }
};

const initialCollectionsState: collectionsType = { collections: [], sections: [] };
const collectionsReducer = (state = initialCollectionsState, action: AnyAction) => {
  switch (action.type) {
    case ACTION_TYPES.FETCH_DATA:
      return { ...state, collections: action.payload };
    case ACTION_TYPES.FETCH_INITIAL_DATA:
      return { ...state, sections: action.payload };
    default:
      return state;
  }
};

export default combineReducers({
  user: userReducer,
  cart: cartReducer,
  collections: collectionsReducer,
});
