import useFetch from '../../../customHooks/useFetch';
import urlItemData from '../../../data/items-data.JSON';
import { createContext } from 'react';
export const ItemsContext = createContext();
export const ItemsProvider = ({ children }) => {
  const { dataItem } = useFetch(urlItemData);
  return (
    <ItemsContext.Provider value={dataItem}>{children}</ItemsContext.Provider>
  );
};
