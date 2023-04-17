import React, { useState } from 'react';
import blogsData from '../../../data/blogsData';
import News from './news';
function Blogs() {
  const [blogs, setBlogs] = useState(blogsData);
  return (
    <section className='m-auto flex justify-between flex-wrap'>
      <News blogs={blogs} />
    </section>
  );
}

export default Blogs;
