import { encode } from 'base-64';
import React, { useState, createContext } from 'react';
import { useEffect } from 'react';
export const CartContext = createContext();
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    window.localStorage.setItem('cartItems', encode(JSON.stringify(cartItems)));
  }, [cartItems]);
  return (
    <CartContext.Provider value={{ cartItems, setCartItems }}>
      {children}
    </CartContext.Provider>
  );
};
