import React, { useContext } from 'react';
import { CartContext } from '../../cart/hooks/cart-context';

function HomeViewItem(props) {
  const { handleAddToCart } = useContext(CartContext);
  const {
    item,
    count,
    handleDecrement,
    handleIncrement,
    handleChange,
    handleHide,
  } = props;
  return (
    <div className='view-item flex justify-center right-active'>
      <div className='container mx-auto section-view-item flex justify-between p-8'>
        <img className='opacity-100' src={item.avatarUrl} alt={item.title} />
        <div className='flex flex-col px-8'>
          <div>
            <div className='flex justify-between items-center font-bold'>
              <h1 className='text-2xl font-bold'>{item.title}</h1>
              <i
                className='fa fa-times cursor-pointer text-2xl hover:text-cyan'
                onClick={handleHide}
              ></i>
            </div>
            <h1 className='text-xl font-semibold my-4'>
              <span
                className={`${
                  item.details.mod === 'SALE'
                    ? 'text-gray text-base line-through'
                    : 'text-cyan'
                }`}
              >
                {' '}
                $ {item.price}
              </span>{' '}
              {item.details.mod === 'SALE' && (
                <span className='text-cyan'>$ {item.salePrice}</span>
              )}
            </h1>
          </div>
          <p className='font-lg my-4'>{item.details.describe}</p>
          <div className='input-item my-14'>
            <div className='flex items-center rounded-2xl'>
              <div className='text-xl flex justify-between py-2 px-4 my-4 input-count'>
                <button className='cursor-pointer' onClick={handleDecrement}>
                  -
                </button>
                <h1 className='mx-1' onChange={handleChange}>
                  {parseInt(count)}
                </h1>
                <button className='cursor-pointer' onClick={handleIncrement}>
                  +
                </button>
              </div>
              <button
                className='cursor-pointer text-center text-xl add-item ml-8 p-2'
                onClick={() => handleAddToCart(item, count)}
              >
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeViewItem;
