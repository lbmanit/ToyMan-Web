import React from 'react';
import { decode } from 'base-64';
import { CartContext } from '../../../context/cart-context';
import { useContext } from 'react';
function CheckCart(props) {
  const { handleDisplayCart } = props;
  const { setCartItems } = useContext(CartContext);
  const cartItems = JSON.parse(
    decode(window.localStorage.getItem('cartItems'))
  );
  const removeCartItem = (id) => {
    const newCartItem = cartItems.filter((item) => item.id !== id);
    setCartItems(newCartItem);
  };
  const cartItem = cartItems.map((item, index) => {
    return (
      <article key={index}>
        <h1>{item.id}</h1>
        <button onClick={() => removeCartItem(item.id)}>Remove</button>
      </article>
    );
  });
  return (
    <section className='fixed z-100'>
      <button onClick={handleDisplayCart}>X</button>
      {cartItem.length === 0 ? <p>Your cart is empty right now!</p> : cartItem}
    </section>
  );
}

export default CheckCart;
