import React, { useMemo } from 'react';
import urlItemData from '../../../data/items-data.JSON';
import { createContext } from 'react';
import useFetch from '../../../customHooks/useFetch';
export const ItemsContext = createContext();
export const ItemsProvider = ({ children }) => {
  const { data } = useFetch(urlItemData);
  const dataItems = useMemo(() => {
    return data;
  });
  return (
    <ItemsContext.Provider value={dataItems}>{children}</ItemsContext.Provider>
  );
};
