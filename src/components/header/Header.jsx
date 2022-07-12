import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/svg/crown.svg';
import './Header.scss';
import { signOut } from '../../components/utils/fireBase';
import { UserContext } from '../../context/UserContext';
import CartIcon from '../cart-icon/CartIcon';
import CartDropDown from '../cart-dropdown/CartDropDown';

function Header() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const location = useLocation();
  const { currentUser } = useContext(UserContext);
  const handleClickCartIcon = () => {
    setIsCartOpen(!isCartOpen);
  };

  useEffect(() => {
    setIsCartOpen(false);
  }, [location.pathname]);

  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/contact">
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
        <CartIcon onClick={handleClickCartIcon} />
      </div>
      {isCartOpen ? <CartDropDown onClickOutside={() => setIsCartOpen(false)} /> : null}
    </div>
  );
}

export default Header;
