import React from 'react';
import LazyLoad from 'react-lazyload';
import { useState } from 'react';
import Spinner from '../../../Spinner';
function Item(props) {
  const { avatarUrl, title, name, price, salePrice, details } = props;
  const [isShow, setIsShow] = useState(false);
  const styleMod = {
    backgroundColor: '',
    top: '',
    right: '',
    left: '',
  };
  let newMod = {};
  if (props.details.mod === 'SALE') {
    newMod = {
      backgroundColor: '#e83e8c',
      top: '10px',
      right: '12px',
    };
  } else if (props.details.mod === 'NEW') {
    newMod = {
      backgroundColor: '#17a2b8',
      top: '10px',
      left: '12px',
    };
  }
  return (
    <article
      key={props.id}
      className='relative left-active'
      onMouseEnter={() => setIsShow(true)}
      onMouseLeave={() => setIsShow(false)}
    >
      <LazyLoad height={563} offset={100} once placeholder={<Spinner />}>
        <img className='rounded-2xl' src={avatarUrl} alt={name} />
      </LazyLoad>
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
          className='absolute rounded-2xl text-white py-1 px-6 z-50'
          style={{ ...styleMod, ...newMod }}
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
            <i className='fa fa-eye'></i>
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
  );
}

export default Item;
