import { createContext, useState } from 'react';

// helper function
const addCartItem = (cartItems, productToAdd) => {
  // find if cartItems contains productToAdd
  const cartItem = cartItems.find((item) => item.id === productToAdd.id);
  // if found, increment quantity
  if (cartItem) {
    return cartItems.map((item) => (item.id === productToAdd.id ? { ...item, quantity: item.quantity + 1 } : item));
  }
  // return new array with modified cartItems/ new cart item
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const CartContext = createContext({
  cartItems: [],
  setCartItems: () => [],
  addItemToCart: () => {},
});

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };
  const value = { cartItems, setCartItems, addItemToCart };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
