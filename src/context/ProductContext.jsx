import { createContext, useState, useEffect } from 'react';
import { getCollectionsAndDocuments } from '../components/utils/fireBase';
import { addCollectionAndDocuments } from '../components/utils/fireBase'; // one-off helper function

export const ProductContext = createContext({
  collections: [],
});

export const ProductProvider = ({ children }) => {
  const [collections, setCollections] = useState([]);
  useEffect(() => {
    // addCollectionAndDocuments('sections', SECTION_DATA);
    const fetchProductData = async () => {
      return await getCollectionsAndDocuments('categories');
    };
    fetchProductData()
      .then((data) => setCollections(data))
      .catch((error) => console.log(error));
  }, []);
  return <ProductContext.Provider value={{ collections }}>{children}</ProductContext.Provider>;
};
