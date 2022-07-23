export const initialUserState = { currentUser: null };
export const userReducer = (state = initialUserState, action) => {
  switch (action.type) {
    case 'SET_CURRENT_USER':
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
    case 'ADD_ITEM':
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
    case 'REMOVE_ITEM':
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload.id),
      };
    case 'MINUS_ITEM':
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
