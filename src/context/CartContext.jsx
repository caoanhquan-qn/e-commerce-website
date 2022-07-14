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

const removeCartItem = (cartItems, productToRemove, type) => {
  const newCartItems = cartItems.filter((item) => item.id !== productToRemove.id);
  if (type === 'remove') {
    return newCartItems;
  }
  if (type === 'minus') {
    if (productToRemove.quantity > 1) {
      return cartItems.map((item) => (item.id === productToRemove.id ? { ...item, quantity: item.quantity - 1 } : item));
    }
    return newCartItems;
  }
};

export const CartContext = createContext({
  cartItems: [],
  setCartItems: () => [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
});

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const removeItemFromCart = (productToRemove, type) => {
    setCartItems(removeCartItem(cartItems, productToRemove, type));
  };
  const value = { cartItems, setCartItems, addItemToCart, removeItemFromCart };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
