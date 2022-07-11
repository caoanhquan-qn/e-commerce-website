import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/svg/crown.svg';
import './Header.scss';
import { signOut } from '../../components/utils/fireBase';
import { UserContext } from '../../context/UserContext';
import CartIcon from '../cart-icon/CartIcon';
import CartDropDown from '../cart-dropdown/CartDropDown';

function Header() {
  const { currentUser } = useContext(UserContext);
  const [toggleCartDropDown, setToggleCartDropDown] = useState(false);
  const handleClickCartIcon = () => {
    setToggleCartDropDown(!toggleCartDropDown);
  };
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
      {toggleCartDropDown ? <CartDropDown onClickOutside={() => setToggleCartDropDown(false)} /> : null}
    </div>
  );
}

export default Header;
