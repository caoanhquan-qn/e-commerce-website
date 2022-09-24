import React, { useState } from 'react';
import CustomButton from '../../custom-button/CustomButton';
import './Product.scss';

import { useDispatch } from 'react-redux';
import { addItem } from '../../../redux/action';
import { productType } from '../../../redux/types';

const ADD_TO_CART_BUTTON_TITLE = 'ADD TO CART';

type productPropsType = {
  product: productType;
};

const Product = ({ product }: productPropsType) => {
  const { imageUrl, name, price } = product;
  const [isShown, setIsShown] = useState(false);
  const dispatch = useDispatch();
  const handleOnMouseEnter = () => setIsShown(true);
  const handleOnMouseLeave = () => setIsShown(false);
  const handleOnBtnClick = () => {
    dispatch(addItem(product));
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
export default Product;
