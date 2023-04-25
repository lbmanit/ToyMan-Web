import React from 'react';
import { Link } from 'react-router-dom';
function CompletePay() {
  return (
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
  );
}

export default CompletePay;
