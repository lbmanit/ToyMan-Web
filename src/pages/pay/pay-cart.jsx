import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../cart/hooks/cart-context';
import FormPayCart from './form-pay-cart';
import Page404 from '../../components/page-404';
function PayCart() {
  const { cartItems, totalPrice } = useContext(CartContext);
  const cartList = cartItems.map((item, index) => {
    return (
      <article key={index} className='flex justify-start items-center my-4'>
        <div className='relative w-1/6 bg-darkLight  rounded-lg'>
          <img className='rounded-lg' src={item.avatarUrl} alt={item.title} />
          <h1 className='absolute -top-2 -right-2  flex items-center justify-center rounded-full bg-gray text-white w-5 h-5'>
            {item.quantity}
          </h1>
        </div>
        <h1 className='font-bold mx-4'>{item.title}</h1>
        <h1 className='w-1/6 ml-auto text-right'>$ {item.total}</h1>
      </article>
    );
  });
  const shipping = 20;
  const finalTotal = parseInt(totalPrice) + shipping;
  return (
    <section className='right-active'>
      {cartItems.length !== 0 ? (
        <div className='container m-auto flex justify-between'>
          <FormPayCart />
          <div className='w-1/3 text-lg p-8 ml-8 border-l border-l-gray'>
            <div className='container m-auto'>{cartList}</div>
            <div className='my-8'>
              <div className='flex justify-between my-2'>
                <h1>Subtotal</h1>
                <h1 className='font-bold'>$ {totalPrice}</h1>
              </div>
              <div className='flex justify-between my-2'>
                <h1>Shipping</h1>
                <h1 className='font-bold'>$ {shipping}</h1>
              </div>
              <div className='flex justify-between font-bold my-2'>
                <h1>Total</h1>
                <h1>{finalTotal}</h1>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Page404 />
      )}
    </section>
  );
}

export default PayCart;
