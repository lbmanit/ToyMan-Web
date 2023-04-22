import React, { useEffect } from 'react';
import { decode } from 'base-64';
import { CartContext } from '../../../context/cart-context';
import { useContext } from 'react';
function CheckCart(props) {
  const { handleDisplayCart } = props;
  const { cartItems, setCartItems, totalPrice, removeCartItem } =
    useContext(CartContext);
  useEffect(() => {
    JSON.parse(decode(window.localStorage.getItem('cartItems')));
  }, [cartItems]);
  const cartItem = cartItems.map((item, index) => {
    return (
      <article key={index}>
        <img src={item.avatarUrl} alt={item.title} />
        <h1>{item.id}</h1>
        <button onClick={() => removeCartItem(item.id)}>Remove</button>
      </article>
    );
  });
  return (
    <section className='cart-items flex flex-col items-center p-16 right-active '>
      <div className='fixed flex flex-col justify-center items-center'>
        <i
          className='text-4xl cursor-pointer fa fa-times text-cyan'
          onClick={handleDisplayCart}
        ></i>
        {cartItem.length === 0 && (
          <p className='text-xl my-4'>Your cart is empty right now!</p>
        )}
        {cartItem.length !== 0 && cartItem}
        {cartItem.length !== 0 && <p>{totalPrice}</p>}
        {cartItem.length !== 0 && (
          <button onClick={() => setCartItems([])}>Remove All</button>
        )}
      </div>
    </section>
  );
}

export default CheckCart;
