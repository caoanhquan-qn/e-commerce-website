import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/homepage/HomePage';
import HatsPage from './pages/hats/HatsPage';
import ShopPage from './pages/shop/ShopPage';
import Header from './components/header/Header';
import SignInSignUpPage from './pages/sign-in-sign-up/SignInSignUpPage';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/shop/hats" element={<HatsPage />} />
          <Route path="/signin" element={<SignInSignUpPage />} />
        </Routes>
      </div>
    );
  }
}

export default App;
