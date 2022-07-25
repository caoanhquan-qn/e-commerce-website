import { FETCH_DATA, SET_CURRENT_USER, ADD_ITEM, REMOVE_ITEM, MINUS_ITEM } from './actionTypes';
export const initialState = { currentUser: null, cartItems: [], collections: [] };
export const initialUserState = { currentUser: 'tao day' };
export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      return state;
  }
};

export const initialCartState = { cartItems: [] };
export const cartReducer = (state = initialCartState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      const cartItem = state.cartItems.find((item) => item.id === action.payload.id);
      if (cartItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((item) => (item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item)),
        };
      }
      return {
        ...state,
        cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
      };
    case REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload.id),
      };
    case MINUS_ITEM:
      if (action.payload.quantity > 1) {
        return {
          ...state,
          cartItems: state.cartItems.map((item) => (item.id === action.payload.id ? { ...item, quantity: item.quantity - 1 } : item)),
        };
      }
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload.id),
      };
    default:
      return state;
  }
};

export const initialCollectionsState = { collections: [] };
export const collectionsReducer = (state = initialCollectionsState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return { ...state, collections: action.payload };
    default:
      return state;
  }
};
