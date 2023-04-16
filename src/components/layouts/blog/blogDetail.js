import React from 'react';
import LazyLoad from 'react-lazyload';
import Spinner from '../../../Spinner';
function BlogDetail(props) {
  const { image, title, content, mainContent, animated, dateUpLoad, author } =
    props;
  return (
    <article>
      <div>
        <LazyLoad height={200} offset={0} once placeholder={<Spinner />}>
          <img src={image} alt={title} />
        </LazyLoad>
        <h1 className='text-3xl my-8'>{title}</h1>
        <h1 className='blog-detail-date text-lg -mt-4 mb-4'>
          {dateUpLoad} \ {author}
        </h1>
        <p className='text-base mt-4'>{content}</p>
        <p className='text-lg m-4 px-4 main-content'>{mainContent}</p>
        <p className='text-base'>{content}</p>
        <div className='flex justify-between '>
          <LazyLoad
            className='mr-4 my-8'
            height={200}
            offset={0}
            once
            placeholder={<Spinner />}
          >
            <img
              className='blog-detail-img left-active'
              src={animated.avatar1}
              alt=''
            />
          </LazyLoad>
          <LazyLoad
            className='ml-4  my-8'
            height={563}
            offset={50}
            once
            placeholder={<Spinner />}
          >
            <img
              className='blog-detail-img right-active'
              src={animated.avatar2}
              alt=''
            />
          </LazyLoad>
        </div>
        <p className='text-base mt-2'>{content}</p>
        <div />
      </div>
      <div></div>
    </article>
  );
}

export default BlogDetail;
