import { encode } from 'base-64';
import React, { useState, useCallback, useMemo, createContext } from 'react';
import { useEffect } from 'react';
export const CartContext = createContext();
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  useEffect(() => {
    window.localStorage.setItem('cartItems', encode(JSON.stringify(cartItems)));
  }, [cartItems]);
  const totalPrice = useMemo(() => {
    return cartItems.reduce((total, item) => total + parseInt(item.total), 0);
  }, [cartItems]);

  const amount = useMemo(() => {
    return cartItems.reduce(
      (amount, item) => amount + parseInt(item.quantity),
      0
    );
  }, [cartItems]);
  const handleAddToCart = (item, quantity) => {
    const finalPrice =
      item.details.mod === 'SALE' ? item.salePrice : item.price;
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      const total = cartItems.reduce((acc, item) => {
        return acc + item.quantity * item.price;
      }, 0);
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id
            ? {
                ...cartItem,
                quantity: cartItem.quantity + quantity,
                total: cartItem.price * quantity + total,
              }
            : cartItem
        )
      );
    } else {
      setAlertMessage('Item added to your cart!');
      setCartItems([
        ...cartItems,
        {
          id: item.id,
          avatarUrl: item.avatarUrl,
          title: item.title,
          price: finalPrice,
          total: finalPrice * quantity,
          quantity,
        },
      ]);
    }
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 1000);
  };
  const removeCartItem = useCallback((id) => {
    setAlertMessage('Remove item from cart completely!');
    setCartItems((prevItems) => {
      const newCartItem = prevItems
        .map((item) => {
          if (item.id === id) {
            if (item.quantity > 1) {
              return {
                ...item,
                quantity: parseInt(item.quantity) - 1,
                total: parseInt(item.total) - parseInt(item.price),
              };
            } else {
              return null;
            }
          } else {
            return item;
          }
        })
        .filter((item) => item !== null);
      window.localStorage.setItem(
        'cartItems',
        encode(JSON.stringify(newCartItem))
      );
      return newCartItem;
    });
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 1000);
  }, []);
  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
        handleAddToCart,
        totalPrice,
        amount,
        removeCartItem,
      }}
    >
      {children}
      {showAlert && <p className='alert-message'>{alertMessage}</p>}
    </CartContext.Provider>
  );
};
