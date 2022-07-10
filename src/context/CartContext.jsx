import { createContext, useState } from 'react';

export const CartContext = createContext({
  cartCounter: 0,
  setCartCounter: () => 0,
});

export const CartProvider = ({ children }) => {
  const [cartCounter, setCartCounter] = useState(0);
  const value = { cartCounter, setCartCounter };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
