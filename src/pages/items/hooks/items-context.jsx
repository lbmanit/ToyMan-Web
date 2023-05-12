import React, { useState, useEffect } from 'react';
import items from '../../../data/items';
import { createContext } from 'react';
export const ItemsContext = createContext();
export const ItemsProvider = ({ children }) => {
  const [dataItems, setDataItems] = useState([]);
  useEffect(() => {
    setDataItems(items);
  }, []);
  return (
    <ItemsContext.Provider value={dataItems}>{children}</ItemsContext.Provider>
  );
};
