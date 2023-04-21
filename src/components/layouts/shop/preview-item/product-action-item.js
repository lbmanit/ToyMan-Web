import React from 'react';
function ProductActionItem(props) {
  const { isShow, handleDisplay } = props;
  return (
    <ul
      className={`product-action  ${
        isShow ? 'left-active' : ''
      } absolute text-xl flex flex-col z-10 top-1/4 right-8`}
    >
      <li className='product-item-action  m-2 mt-4'>
        <i className='fa fa-eye' onClick={handleDisplay}></i>
      </li>
      <li className='product-item-action  m-2'>
        <i className='fa fa-heart'></i>
      </li>
      <li className='product-item-action m-2 mb-4'>
        <i className='fa fa-cart-plus'></i>
      </li>
    </ul>
  );
}

export default ProductActionItem;
