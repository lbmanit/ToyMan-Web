import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../../context/cart-context';
function ProductActionItem(props) {
  const { handleAddToCart } = useContext(CartContext);
  const { isShow, handleDisplay, item } = props;
  return (
    <ul
      className={`product-action  ${
        isShow ? 'left-active' : ''
      } absolute text-xl flex flex-col z-10 top-1/4 right-8`}
    >
      <li className='product-item-action  m-2 mt-4'>
        <i className='fa fa-eye' onClick={handleDisplay}></i>
      </li>
      <li className='product-item-action m-2'>
        <i className='fa fa-heart'></i>
      </li>
      <li className='product-item-action m-2 mb-4'>
        <i
          className='fa fa-cart-plus'
          onClick={() => handleAddToCart(item, 1)}
        ></i>
      </li>
    </ul>
  );
}

export default ProductActionItem;
