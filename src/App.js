import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/homepage/HomePage';
import HatsPage from './pages/hats/HatsPage';
import ShopPage from './pages/shop/ShopPage';
import Header from './components/header/Header';
import SignInSignUpPage from './pages/sign-in-sign-up/SignInSignUpPage';
import { auth, createUserProfileDocument } from './components/utils/fireBase';

import { UserContext } from './context/UserContext';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  unsubscribeFromAuth = null;
  static contextType = UserContext;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      // observer pattern
      const { setCurrentUser } = this.context;
      setCurrentUser(user);
      createUserProfileDocument(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.context.currentUser} />
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
