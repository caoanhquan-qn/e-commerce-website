import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/img/crown.svg';
import './Header.scss';
import { signOut } from '../../components/utils/fireBase';

function Header({ currentUser }) {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/">
          CONTACT
        </Link>
        {currentUser ? (
          <div className="option" onClick={signOut}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        )}
      </div>
    </div>
  );
}

export default Header;
