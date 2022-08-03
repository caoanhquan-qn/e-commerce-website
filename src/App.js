import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import HomePage from './pages/homepage/HomePage';
import ShopPage from './pages/shop/ShopPage';
import ContactPage from './pages/contact/ContactPage';
import CollectionPage from './components/collection-page/CollectionPage';
import Header from './components/header/Header';
import SignInSignUpPage from './pages/sign-in-sign-up/SignInSignUpPage';
import CheckOutPage from './pages/checkout/CheckOutPage';
import { onAuthStateChanged, createUserProfileDocument } from './components/utils/fireBase';
import { startFetchingData, setCurrentUser } from './redux/action';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribeFromAuth = onAuthStateChanged((user) => {
      dispatch(setCurrentUser(user));
      createUserProfileDocument(user);
    });
    dispatch(startFetchingData());
    return unsubscribeFromAuth;
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<HomePage />} />
          <Route path="shop" element={<ShopPage />}></Route>
          <Route path="shop/hats" element={<CollectionPage collectionName="hats" />} />
          <Route path="/shop/jackets" element={<CollectionPage collectionName="jackets" />} />
          <Route path="/shop/sneakers" element={<CollectionPage collectionName="sneakers" />} />
          <Route path="/shop/mens" element={<CollectionPage collectionName="mens" />} />
          <Route path="/shop/womens" element={<CollectionPage collectionName="womens" />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="signin" element={<SignInSignUpPage />} />
          <Route path="checkout" element={<CheckOutPage />} />
        </Route>
      </Routes>
    </div>
  );
};
export default App;
