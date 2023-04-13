import React, { useMemo, useState } from 'react';
import blogsData from '../../../data/blogsData';
import New from './new';
function Blog() {
  const [blogs, setBlogs] = useState(blogsData);
  const memoizedNews = useMemo(() => {
    return <New blogs={blogs} />;
  }, [blogs]);
  return <section>{memoizedNews}</section>;
}

export default Blog;
