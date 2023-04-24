import React from 'react';
import LazyLoad from 'react-lazyload';
import Spinner from '../../../../app/Spinner';
function RelatedBlogs(props) {
  const { image, title, dateUpLoad, handleChange } = props;
  return (
    <article className='recent-blog flex items-center' onClick={handleChange}>
      <LazyLoad
        className='w-1/3'
        height={50}
        offset={50}
        once
        placeholder={<Spinner />}
      >
        <img className='w-full blog-img' src={image} alt={title} />
      </LazyLoad>
      <div className='w-2/3 mx-4 flex flex-col justify-between'>
        <h1 className='my-2'>{dateUpLoad}</h1>
        <h1 className='my-2 text-base font-bold'>{title}</h1>
      </div>
    </article>
  );
}

export default RelatedBlogs;
