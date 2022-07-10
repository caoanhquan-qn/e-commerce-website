import { createContext, useState, useEffect } from 'react';
import SHOP_DATA from '../data/shop.data';

export const ProductContext = createContext({
  collections: [],
});

export const ProductProvider = ({ children }) => {
  const [collections] = useState(SHOP_DATA);
  return <ProductContext.Provider value={{ collections }}>{children}</ProductContext.Provider>;
};
