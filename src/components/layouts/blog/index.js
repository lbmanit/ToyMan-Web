import React, { useEffect, useMemo, useState } from 'react';
import blogsData from '../../../data/blogsData';
import New from './new';
function Blog() {
  const [blogs, setBlogs] = useState();
  useEffect(() => {
    setBlogs(blogsData);
  }, []);
  const memoizedNews = useMemo(() => {
    return <New blogs={blogs} />;
  }, [blogs]);
  return <section>{memoizedNews}</section>;
}

export default Blog;
