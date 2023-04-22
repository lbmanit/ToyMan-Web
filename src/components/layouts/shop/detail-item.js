import React, { useState, useContext } from 'react';
import LazyLoad from 'react-lazyload';
import { Link, useLocation, useParams } from 'react-router-dom';
import { decode } from 'base-64';
import Spinner from '../../../Spinner';
import { CartContext } from '../../context/cart-context';
function DetailItem() {
  const { cartItems, setCartItems } = useContext(CartContext);
  const { id } = useParams();
  const [count, setCount] = useState(1);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const items = JSON.parse(decode(searchParams.get('toys')));
  const mainItem = items.find((item) => item.id === parseInt(id));
  const { avatarUrl, title, price, salePrice, details } = mainItem;
  const handleAddToCart = (mainItem, quantity) => {
    const finalPrice =
      mainItem.details.mod === 'SALE' ? mainItem.salePrice : mainItem.price;
    const existingItem = cartItems.find(
      (cartItem) => cartItem.id === mainItem.id
    );
    if (existingItem) {
      const total = cartItems.reduce((acc, item) => {
        return acc + item.quantity * item.price;
      }, 0);
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === mainItem.id
            ? {
                ...cartItem,
                quantity: cartItem.quantity + quantity,
                total: cartItem.price * quantity + total,
              }
            : cartItem
        )
      );
    } else {
      setCartItems([
        ...cartItems,
        {
          id: mainItem.id,
          title: mainItem.title,
          price: finalPrice,
          total: finalPrice * quantity,
          quantity,
        },
      ]);
    }
  };
  console.log(cartItems);
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
          <div className='input-item text-center'>
            <div className='flex items-center rounded-2xl'>
              <div className='text-xl flex justify-between py-2 px-4 my-4 input-count'>
                <button className='cursor-pointer' onClick={handleDecrement}>
                  -
                </button>
                <h1 onChange={handleChange}>{parseInt(count)}</h1>
                <button className='cursor-pointer' onClick={handleIncrement}>
                  +
                </button>
              </div>
              <button
                className='cursor-pointer text-center text-xl add-item ml-8 p-2'
                onClick={() => handleAddToCart(mainItem, count)}
              >
                ADD TO CART
              </button>
            </div>
            <button className='text-xl text-center p-2 buy-item'>
              Buy it now
            </button>
          </div>
          <div className='cursor-pointer flex items-center text-lg my-4'>
            <i className='fa fa-heart'></i>
            <button className='mx-2'>Add to wishlist</button>
          </div>
        </div>
      </article>
    </React.Fragment>
  );
}

export default DetailItem;
