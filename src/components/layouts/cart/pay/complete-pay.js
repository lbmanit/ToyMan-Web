import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../../context/cart-context';
import Page404 from '../../404';
function CompletePay() {
  const { cartItems } = useContext(CartContext);
  return cartItems.length ? (
    <section className='flex flex-col items-center justify-center complete-pay right-active'>
      <h1 className='text-6xl font-extrabold mt-6 mb-2'>
        Thank you for your purchase! <i className='far fa-grin-hearts'></i>
      </h1>
      <p className='text-xl m-4'>We will deliver to you as soon as possible.</p>
      <Link
        to='/'
        className='text-xl bg-cyan text-white rounded-3xl px-8 py-4 hover:bg-pink'
      >
        <button>Back To Home</button>
      </Link>
    </section>
  ) : (
    <Page404 />
  );
}

export default CompletePay;
