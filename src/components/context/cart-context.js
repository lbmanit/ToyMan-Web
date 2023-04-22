import { encode } from 'base-64';
import React, { useState, useCallback, useMemo, createContext } from 'react';
import { useEffect } from 'react';
export const CartContext = createContext();
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    window.localStorage.setItem('cartItems', encode(JSON.stringify(cartItems)));
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
  };
  const removeCartItem = useCallback((id) => {
    setCartItems((prevItems) => {
      const newCartItem = prevItems
        .map((item) => {
          if (item.id === id) {
            if (item.quantity > 1) {
              return { ...item, quantity: parseInt(item.quantity) - 1 };
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
  }, []);
  const totalPrice = useMemo(() => {
    cartItems.reduce((total, item) => {
      return total + item.total;
    }, 0);
  }, []);
  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
        handleAddToCart,
        totalPrice,
        removeCartItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
