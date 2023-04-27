import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../context/cart-context';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazyload';
import Spinner from '../../../app/Spinner';
function ViewCart() {
  const { cartItems, setCartItems, removeCartItem, totalPrice } =
    useContext(CartContext);
  const cartList = cartItems.map((item, index) => {
    return (
      <tr className='border' key={index}>
        <td className='w-1/6 p-4'>
          <LazyLoad height={563} offset={100} once placeholder={<Spinner />}>
            <img src={item.avatarUrl} alt={item.title} />
          </LazyLoad>
        </td>
        <td className='border'>{item.title}</td>
        <td className='border'>$ {item.price}</td>
        <td className='border'>{item.quantity}</td>
        <td className='border'>$ {item.total}</td>
        <td className='border'>
          <i
            className='w-1/4 h-1/4 fa fa-times cursor-pointer text-grayDark border border-gray rounded-full p-1'
            onClick={() => removeCartItem(item.id)}
          ></i>
        </td>
      </tr>
    );
  });
  return (
    <div>
      <div className='flex nav-blog'>
        <div className='container m-auto flex items-center font-bold nav-blog'>
          <Link className='text-xl text-cyan' to='/'>
            Home
          </Link>
          <h1 className='text-xl text-cyan mx-2'>/</h1>
          <h1 className='text-xl text-pink'>your shopping cart</h1>
        </div>
      </div>
      <section className='container m-auto text-xl flex items-center justify-center my-16 left-active'>
        {cartItems.length !== 0 ? (
          <div className='flex flex-col'>
            <table className='text-center'>
              <tr className='border'>
                <th className='border'>Image</th>
                <th className='border'>Product</th>
                <th className='border'>Price</th>
                <th className='border'>Quantity</th>
                <th className='border'>Total</th>
                <th className='border'>Remove</th>
              </tr>
              {cartList}
            </table>

            <div className='flex justify-between items-center my-12'>
              <Link
                className='cursor-pointer border py-4 px-12 rounded-3xl bg-cyan text-white hover:bg-pink'
                to='/collections'
              >
                <button>CONTINUE SHOPPING</button>
              </Link>
              <button
                className='cursor-pointer border py-4 px-12 rounded-3xl bg-cyan text-white hover:bg-pink'
                onClick={() => setCartItems([])}
              >
                CLEAR CART
              </button>
            </div>
            <div className='flex '>
              <div>
                <div className='p-4 border border-gray  bg-darkLight'>
                  <h1 className='text-xl font-bold border-b border-b-gray py-4'>
                    Delivery Date
                  </h1>
                  <div className='flex mt-8'>
                    <label htmlFor='delivery-date'>
                      Pick a delivery date:{' '}
                    </label>
                    <input
                      className='w-1/3'
                      type='date'
                      name='delivery-date'
                      id='delivery-date'
                    />
                  </div>
                  <p className='text-lg my-4  bg-darkLight'>
                    We do not delivery during the week-end.
                  </p>
                </div>
                <div className='p-4 border border-gray mt-12  bg-darkLight'>
                  <h1 className='text-xl font-bold'>
                    Special instructions for seller
                  </h1>
                  <textarea
                    className='p-4 border border-gray focus:outline-none'
                    name='cart-special'
                    id='cart-special'
                    cols='30'
                    rows='10'
                  ></textarea>
                </div>
              </div>
              <div className='w-2/3 h-1/2 border border-gray p-4 ml-12 mb-8 bg-darkLight'>
                <h1 className='font-bold'>Cart Totals</h1>
                <div className='bg-white border border-gray flex justify-start mt-8 mb-4'>
                  <h1 className='w-1/2 border-r border-r-gray px-4 py-2'>
                    Total
                  </h1>
                  <h1 className='w-1/2  px-4 py-2'>$ {totalPrice}</h1>
                </div>
                <Link
                  className='border py-4 px-12 rounded-3xl bg-cyan text-white hover:bg-pink'
                  to='/cart/checkouts'
                >
                  <button>PROCEED TO CHECKOUT</button>
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <p className='text-4xl font-bold mt-24'>
              Shopping Cart Your cart is currently empty.
            </p>
            <div className='flex justify-between items-center my-20'>
              <Link
                className='text-2xl rounded-3xl py-2 px-8 bg-cyan text-white hover:bg-pink'
                to='/collections'
              >
                <h1>GO TO SHOPPING</h1>
              </Link>
              <h1 className='text-2xl font-bold'>Or</h1>
              <Link
                className='text-2xl rounded-3xl py-2 px-8 bg-cyan text-white hover:bg-pink'
                to='/'
              >
                {' '}
                <h1>BACK TO HOMEPAGE</h1>
              </Link>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}

export default ViewCart;
