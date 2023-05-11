import { createContext } from 'react';
import urlBlogsData from '../../../data/blogs-data.JSON';
import { useState } from 'react';
import { useEffect } from 'react';
export const BlogContext = createContext();
export const BlogProvider = ({ children }) => {
  const [dataBlogs, setDataBlogs] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(urlBlogsData);
      const data = await res.json();
      setDataBlogs(data);
    };
    fetchData().catch((err) => console.log(err));
  });
  return (
    <BlogContext.Provider value={dataBlogs}>{children}</BlogContext.Provider>
  );
};
