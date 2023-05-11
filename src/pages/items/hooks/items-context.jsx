import React, { useState, useEffect } from 'react';
import urlItemData from '../../../data/items-data.JSON';
import { createContext } from 'react';
export const ItemsContext = createContext();
export const ItemsProvider = ({ children }) => {
  const [dataItems, setDataItems] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(urlItemData);
      const data = await res.json();
      setDataItems(data);
    };
    fetchData().catch((err) => console.log(err));
  });
  return (
    <ItemsContext.Provider value={dataItems}>{children}</ItemsContext.Provider>
  );
};
