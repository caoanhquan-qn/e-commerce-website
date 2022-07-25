import { createContext, useEffect, useReducer } from 'react';
import { getCollectionsAndDocuments } from '../components/utils/fireBase';
import { fetchData } from '../redux/action';
import { initialProductState, productReducer } from '../redux/reducer';

export const ProductContext = createContext({
  collections: [],
});

export const ProductProvider = ({ children }) => {
  const [{ collections }, dispatch] = useReducer(productReducer, initialProductState);
  useEffect(() => {
    const fetchProductData = async () => {
      return await getCollectionsAndDocuments('categories');
    };
    fetchProductData()
      .then((data) => dispatch(fetchData(data)))
      .catch((error) => console.log(error));
  }, []);
  return <ProductContext.Provider value={{ collections }}>{children}</ProductContext.Provider>;
};
