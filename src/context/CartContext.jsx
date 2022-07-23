import { createContext, useReducer } from 'react';
import { cartReducer, initialCartState } from '../redux/reducer';

import { addItem, removeItem, minusItem } from '../redux/action';

export const CartContext = createContext({
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
});

export const CartProvider = ({ children }) => {
  const [{ cartItems }, dispatch] = useReducer(cartReducer, initialCartState);

  const addItemToCart = (productToAdd) => {
    dispatch(addItem(productToAdd));
  };

  const removeItemFromCart = (productToRemove, type) => {
    if (type === 'remove') dispatch(removeItem(productToRemove));
    if (type === 'minus') dispatch(minusItem(productToRemove));
  };
  const value = { cartItems, addItemToCart, removeItemFromCart };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
