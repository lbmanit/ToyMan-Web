import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../cart/hooks/cart-context';
import { WishContext } from '../../wish/hooks/wish-context';
function HomeProductActionItem(props) {
  const { handleAddToCart } = useContext(CartContext);
  const { addToWishList } = useContext(WishContext);
  const { isShow, handleDisplay, item } = props;
  return (
    <React.Fragment>
      <ul
        className={`product-action  ${
          isShow ? 'left-active' : ''
        } absolute text-xl flex flex-col z-10 top-1/4 right-8`}
      >
        <li className='product-item-action  m-2 mt-4'>
          <i className='fa fa-eye' onClick={handleDisplay}></i>
        </li>
        <li className='product-item-action m-2'>
          <i className='fa fa-heart' onClick={() => addToWishList(item)}></i>
        </li>
        <li className='product-item-action m-2 mb-4'>
          <i
            className='fa fa-cart-plus'
            onClick={() => handleAddToCart(item, 1)}
          ></i>
        </li>
      </ul>
    </React.Fragment>
  );
}

export default HomeProductActionItem;
