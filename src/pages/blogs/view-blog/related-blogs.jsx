import React from 'react';
import LazyLoad from 'react-lazyload';
import { Link } from 'react-router-dom';
function RelatedBlogs(props) {
  const { id, image, title, dateUpLoad, handleChange } = props;
  return (
    <Link
      to={{ pathname: `/blogs/${id}` }}
      className='recent-blog flex items-center'
      onClick={handleChange}
    >
      <LazyLoad className='w-1/3 blog-img' offset={100} once>
        <img src={image} alt={title} />
      </LazyLoad>
      <div className='w-2/3 mx-4 flex flex-col justify-between'>
        <h1 className='my-2'>{dateUpLoad}</h1>
        <h1 className='my-2 text-base font-bold'>{title}</h1>
      </div>
    </Link>
  );
}

export default RelatedBlogs;
