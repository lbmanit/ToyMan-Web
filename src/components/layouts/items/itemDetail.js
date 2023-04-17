import React, { useState } from 'react';
import LazyLoad from 'react-lazyload';
import Spinner from '../../../Spinner';
import { Link } from 'react-router-dom';
function ItemDetail(props) {
  const { id, avatarUrl, title, price, salePrice, details } = props;
  const [count, setCount] = useState(1);
  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    if (count === 0) {
      setCount(0);
    } else {
      setCount(count - 1);
    }
  };
  return (
    <React.Fragment>
      <div className='text-lg flex items-center font-bold nav-collections left-active'>
        <div className='container m-auto flex items-center'>
          <Link className='text-cyan' to='/'>
            Home
          </Link>
          <h1 className='text-cyan mx-2'>/</h1>
          <h1 className='text-pink'>{title}</h1>
        </div>
      </div>
      <article className='container m-auto flex my-16 left-active'>
        <LazyLoad
          className='w-1/2'
          height={563}
          offset={100}
          once
          placeholder={<Spinner />}
        >
          <img className='w-full' src={avatarUrl} alt={title} />
        </LazyLoad>
        <div className='w-1/2 px-8'>
          <h1 className='text-4xl font-medium'>{title}</h1>
          <div className='text-cyan text-2xl my-2'>
            <h2>{details.mod === 'SALE' ? salePrice : ''}</h2>
            <h2>$ {price}</h2>
          </div>
          <h3 className='text-xl'>
            {details.rate} / 5 <i className='fa fa-star text-yellow'></i>
          </h3>
          <h3 className='text-lg font-bold my-2'>SKU: {id}</h3>
          <h3 className='text-lg font-bold'>Vendor: {details.Vendor}</h3>
          <p className='text-base my-4'>{details.describe}</p>
          <div className='flex text-base cursor-pointer'>
            <div className='flex justify-between items-center mr-4'>
              <i className='fas fa-ruler-horizontal mr-2'></i>
              <h1>Size Guide</h1>
            </div>
            <div className='flex justify-between items-center mx-4'>
              <i className='fa fa-plane mr-2'></i>
              <h1>Shipping</h1>
            </div>
            <div className='flex justify-between items-center mx-4'>
              <i className='fa fa-question-circle mr-2'></i>
              <h1>Ask About This Product</h1>
            </div>
          </div>
          <div className='input-item'>
            <div className='flex items-center rounded-2xl'>
              <div className='text-xl w-1/4 flex justify-between py-2 px-4 my-4 input-count'>
                <h1 className='cursor-pointer' onClick={handleDecrement}>
                  -
                </h1>
                <input
                  className='w-1/4 text-center'
                  type='text'
                  value={count}
                />
                <h1 className='cursor-pointer' onClick={handleIncrement}>
                  +
                </h1>
              </div>
              <h1 className='cursor-pointer text-center text-xl add-item ml-8 p-2'>
                ADD TO CART
              </h1>
            </div>
            <h1 className='text-xl text-center p-2 buy-item'>Buy it now</h1>
          </div>
          <div className='cursor-pointer flex items-center text-lg my-4'>
            <i className='fa fa-heart'></i>
            <h1 className='mx-2'>Add to wishlist</h1>
          </div>
        </div>
      </article>
    </React.Fragment>
  );
}

export default ItemDetail;
