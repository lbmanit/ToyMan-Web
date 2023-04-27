import React from 'react';
import LazyLoad from 'react-lazyload';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { encode } from 'base-64';
import itemsData from '../../../../data/items-data';
import ProductActionItem from './product-action-item';
import ViewItem from './view-item';
import Spinner from '../../../../app/Spinner';
function PreviewItem(props) {
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
  function handleDisplay() {
    setIsDisplay(true);
    document.body.style.overflow = 'hidden';
  }
  function handleHide() {
    setIsDisplay(false);
    document.body.style.overflow = 'auto';
  }
  return (
    <React.Fragment>
      <article
        className='item-collections relative right-active overflow-hidden'
        onMouseEnter={() => setIsShow(true)}
        onMouseLeave={() => setIsShow(false)}
      >
        <Link
          to={{
            pathname: `/collections/${id}`,
            search: `?toys=${encode(JSON.stringify(itemsData))}`,
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
          <ProductActionItem
            item={props}
            isShow={isShow}
            handleDisplay={handleDisplay}
          />
        )}
      </article>
      {isDisplay && (
        <ViewItem
          item={props}
          count={count}
          handleHide={handleHide}
          handleDecrement={handleDecrement}
          handleChange={handleChange}
          handleIncrement={handleIncrement}
        />
      )}
    </React.Fragment>
  );
}

export default PreviewItem;
