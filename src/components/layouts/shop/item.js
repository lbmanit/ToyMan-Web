import React from 'react';
import LazyLoad from 'react-lazyload';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import itemsData from '../../../data/itemsData';
import Spinner from '../../../Spinner';
function Item(props) {
  const { id, avatarUrl, title, price, salePrice, details } = props;
  const [isShow, setIsShow] = useState(false);
  const [isDisplay, setIsDisplay] = useState(false);
  const [count, setCount] = useState(1);
  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    setCount((prevCount) => {
      if (prevCount <= 1) {
        return 1;
      } else {
        return prevCount - 1;
      }
    });
  };
  function handleChange(event) {
    setCount(parseInt(event.target.value));
  }
  return (
    <React.Fragment>
      <article
        className='relative left-active item-collections overflow-hidden'
        onMouseEnter={() => setIsShow(true)}
        onMouseLeave={() => setIsShow(false)}
      >
        <Link
          to={{
            pathname: `/collections/${id}`,
            search: `?toys=${JSON.stringify(itemsData)}`,
          }}
        >
          <LazyLoad height={563} offset={100} once placeholder={<Spinner />}>
            <img className='rounded-2xl' src={avatarUrl} alt={title} />
          </LazyLoad>
        </Link>
        <p className='product-name-action text-2xl mt-4'>{title}</p>
        <p className='text-xl font-semibold my-2'>
          <span
            className={`${
              details.mod === 'SALE'
                ? 'text-gray text-base line-through'
                : 'text-cyan'
            }`}
          >
            {' '}
            $ {price}
          </span>{' '}
          {details.mod === 'SALE' && (
            <span className='text-cyan'>$ {salePrice}</span>
          )}
        </p>
        <h3 className='text-xl'>
          {details.rate} / 5 <i className='text-yellow fa fa-star'></i>
        </h3>
        {details.mod && (
          <h3
            className={`absolute rounded-2xl text-white py-1 px-6 z-50 ${
              details.mod === 'SALE' ? 'sale-mod' : 'new-mod'
            }`}
          >
            {details.mod}
          </h3>
        )}
        {isShow && (
          <ul
            className={`product-action  ${
              isShow ? 'left-active' : ''
            } absolute text-xl flex flex-col z-10 top-1/4 right-8`}
          >
            <li className='product-item-action  m-2 mt-4'>
              <i className='fa fa-eye' onClick={() => setIsDisplay(true)}></i>
            </li>
            <li className='product-item-action  m-2'>
              <i className='fa fa-heart'></i>
            </li>
            <li className='product-item-action m-2 mb-4'>
              <i className='fa fa-cart-plus'></i>
            </li>
          </ul>
        )}
      </article>
      {isDisplay && (
        <div className='view-item flex justify-center overflow-hidden'>
          <div className='container mx-auto section-view-item flex p-8 mt-48'>
            <img className='opacity-100' src={avatarUrl} alt={title} />
            <div className='flex flex-col px-8'>
              <div>
                <div className='flex justify-between items-center font-bold'>
                  <h1 className='text-2xl font-bold'>{title}</h1>
                  <i
                    className='fa fa-times cursor-pointer text-2xl hover:text-cyan'
                    onClick={() => setIsDisplay(false)}
                  ></i>
                </div>
                <h1 className='text-xl font-semibold my-4'>
                  <span
                    className={`${
                      details.mod === 'SALE'
                        ? 'text-gray text-base line-through'
                        : 'text-cyan'
                    }`}
                  >
                    {' '}
                    $ {price}
                  </span>{' '}
                  {details.mod === 'SALE' && (
                    <span className='text-cyan'>$ {salePrice}</span>
                  )}
                </h1>
              </div>
              <p className='font-lg my-4'>{details.describe}</p>
              <div className='input-item my-14'>
                <div className='flex items-center rounded-2xl'>
                  <div className='text-xl flex justify-between py-2 px-4 my-4 input-count'>
                    <button
                      className='cursor-pointer'
                      onClick={handleDecrement}
                    >
                      -
                    </button>
                    <h1 className='mx-1' onChange={handleChange}>
                      {parseInt(count)}
                    </h1>
                    <button
                      className='cursor-pointer'
                      onClick={handleIncrement}
                    >
                      +
                    </button>
                  </div>
                  <h1 className='cursor-pointer text-center text-xl add-item ml-8 p-2'>
                    ADD TO CART
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
}

export default Item;
