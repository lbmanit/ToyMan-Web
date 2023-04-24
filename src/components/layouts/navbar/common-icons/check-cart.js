import React, { useState } from 'react';
import { CartContext } from '../../../context/cart-context';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
function CheckCart(props) {
  const { handleDisplayCart } = props;
  const [isShowRemove, setIsShowRemove] = useState(false);
  const { cartItems, setCartItems, removeCartItem, totalPrice } =
    useContext(CartContext);
  const cartItem = cartItems.map((item, index) => {
    return (
      <article
        onMouseEnter={() => setIsShowRemove(true)}
        onMouseLeave={() => setIsShowRemove(false)}
        className='relative'
        key={index}
      >
        <div className='flex items-center mt-8'>
          <img
            className='w-1/4 cursor-pointer'
            src={item.avatarUrl}
            alt={item.title}
          />
          <div className='px-4'>
            <h1 className='cursor-pointer text-xl font-bold hover:text-cyan'>
              {item.title}
            </h1>
            <div className='flex text-lg'>
              <h1>{item.quantity}</h1>
              <h1 className='mx-2'>x</h1>
              <h1>$ {item.price}</h1>
            </div>
          </div>
        </div>
        {isShowRemove && (
          <i
            className='absolute top-1/3 left-2 remove fa fa-times cursor-pointer text-grayDark jumpActive'
            onClick={() => removeCartItem(item.id)}
          ></i>
        )}
      </article>
    );
  });
  return (
    <section className='cart-items flex flex-col items-center p-16 right-active '>
      <div className='fixed flex flex-col justify-center items-center px-8'>
        <div className='w-full flex justify-between items-center border-b-2 border-b-grayDark'>
          <h1 className='text-2xl font-bold'>Shopping Cart</h1>
          <i
            className='text-4xl cursor-pointer fa fa-times text-grayDark hover:text-cyan'
            onClick={handleDisplayCart}
          ></i>
        </div>
        {cartItem.length === 0 && (
          <p className='text-xl my-4'>Your cart is empty right now!</p>
        )}
        {cartItem.length !== 0 && (
          <div className='list-cart-items flex flex-col'>{cartItem}</div>
        )}
        {cartItem.length !== 0 && (
          <div className='w-full flex justify-between items-center text-xl my-4 py-4 border-y-2 border-t-gray border-b-gray'>
            <h1>Total: </h1>
            <h1 className='ml-auto'>$ {totalPrice}</h1>
          </div>
        )}
        {/* {cartItem.length !== 0 && (
          <button onClick={() => setCartItems([])}>Remove All</button>
        )} */}
        {cartItems.length !== 0 && (
          <Link className='w-full' to='/cart' onClick={handleDisplayCart}>
            <button className='w-full text-2xl my-4 py-4 px-12 rounded-3xl border border-gray hover:text-white hover:bg-cyan'>
              View Cart
            </button>
          </Link>
        )}
      </div>
    </section>
  );
}

export default CheckCart;
