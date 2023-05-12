import { createContext, useState, useEffect } from 'react';
import blogsData from '../../../data/blogs-data';
export const BlogContext = createContext();
export const BlogProvider = ({ children }) => {
  const [dataBlogs, setDataBlogs] = useState([]);
  useEffect(() => {
    setDataBlogs(blogsData);
  }, []);
  return (
    <BlogContext.Provider value={dataBlogs}>{children}</BlogContext.Provider>
  );
};
