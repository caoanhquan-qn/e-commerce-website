import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/svg/crown.svg';
import CartIcon from '../cart-icon/CartIcon';
import CartDropDown from '../cart-dropdown/CartDropDown';
import { selectCurrentUser } from '../../redux/selector';
import { useDispatch } from 'react-redux';
import { startSigningOut } from '../../redux/action';
import './Header.scss';

function Header() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const location = useLocation();
  const currentUser = useSelector(selectCurrentUser);
  const handleClickCartIcon = () => {
    setIsCartOpen(!isCartOpen);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    setIsCartOpen(false);
  }, [location.pathname]);

  const handleSignOut = () => {
    dispatch(startSigningOut());
  };

  return (
    <div>
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
            <div className="option" onClick={handleSignOut}>
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
      <Outlet />
    </div>
  );
}

export default Header;
