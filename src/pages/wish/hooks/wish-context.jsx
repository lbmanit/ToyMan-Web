import React from 'react';
import { encode } from 'base-64';
import { useCallback } from 'react';
import { createContext, useEffect, useState } from 'react';
export const WishContext = createContext();
export const WishProvider = ({ children }) => {
  const [wishList, setWishList] = useState([]);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  useEffect(() => {
    window.localStorage.setItem('wishList', encode(JSON.stringify(wishList)));
  }, [wishList]);
  const addToWishList = useCallback((item) => {
    const existingItem = wishList.find((wishItem) => wishItem.id === item.id);
    if (existingItem) {
      setAlertMessage('This item is already in your wishlist!');
    } else {
      setWishList([...wishList, item]);
      setAlertMessage('Item added to your wishlist!');
    }
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 1000);
  }, []);
  const removeWishList = useCallback((id) => {
    setWishList((prevItems) => {
      setAlertMessage('Remove item from wishlist completely!');
      const newWisList = prevItems.filter((item) => item.id !== parseInt(id));
      window.localStorage.setItem(
        'wishList',
        encode(JSON.stringify(newWisList))
      );
      return newWisList;
    });
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 1000);
  }, []);
  return (
    <WishContext.Provider
      value={{
        wishList,
        setWishList,
        addToWishList,
        removeWishList,
      }}
    >
      {children}
      {showAlert && <p className='alert-message'>{alertMessage}</p>}
    </WishContext.Provider>
  );
};
