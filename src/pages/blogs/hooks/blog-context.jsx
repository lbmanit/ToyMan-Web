import { createContext, useMemo } from 'react';
import urlBlogsData from '../../../data/blogs-data.JSON';
import useFetch from '../../../customHooks/useFetch';
export const BlogContext = createContext();
export const BlogProvider = ({ children }) => {
  const { data } = useFetch(urlBlogsData);
  const dataBlogs = useMemo(() => {
    return data;
  }, []);
  return (
    <BlogContext.Provider value={dataBlogs}>{children}</BlogContext.Provider>
  );
};
