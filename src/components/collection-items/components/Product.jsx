import React, { useState, useContext } from 'react';
import CustomButton from '../../custom-button/CustomButton';
import './Product.scss';
import { CartContext } from '../../../context/CartContext';

const ADD_TO_CART_BUTTON_TITLE = 'ADD TO CART';

const Item = ({ imageUrl, name, price }) => {
  const [isShown, setIsShown] = useState(false);
  const { cartCounter, setCartCounter } = useContext(CartContext);
  const handleOnMouseEnter = () => setIsShown(true);
  const handleOnMouseLeave = () => setIsShown(false);
  const handleOnBtnClick = () => {
    setCartCounter(cartCounter + 1);
  };
  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave}>
        {isShown ? (
          <CustomButton buttonType="addToCart" onClick={handleOnBtnClick}>
            {ADD_TO_CART_BUTTON_TITLE}
          </CustomButton>
        ) : null}
      </div>
      <div className="item-content">
        <div className="name">{name}</div>
        <div className="price">{price}</div>
      </div>
    </div>
  );
};
export default Item;
