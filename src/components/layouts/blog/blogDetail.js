import React from 'react';
import LazyLoad from 'react-lazyload';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import Spinner from '../../../Spinner';
function BlogDetail() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const blog = JSON.parse(searchParams.get('blog'));
  console.log(blog);
  return (
    <section className='left-active'>
      <div className='flex items-center nav-blog'>
        <Link to='/'>
          <h1 className='text-cyan text-xl m-2 ml-16'>Home</h1>
        </Link>
        <h1 className='text-cyan text-xl m-2'>/</h1>
        <Link to='/news'>
          <h1 className='text-cyan text-xl m-2'>Blog</h1>
        </Link>
        <h1 className='text-cyan text-xl m-2'>/</h1>
        <h1 className='text-pink text-xl m-2'>{blog.title}</h1>
      </div>

      <div className='container m-auto flex overflow-hidden'>
        <aside className='w-1/4'>asdsa</aside>
        <article className='w-3/4 p-4'>
          <LazyLoad className='my-4' height={563} offset={100} once>
            <img
              className='blog-detail-img w-full'
              src={blog.image}
              alt={blog.title}
            />
          </LazyLoad>
          <h1 className='text-3xl my-8'>{blog.title}</h1>
          <h1 className='blog-detail-date text-lg -mt-4 mb-4'>
            {blog.dateUpLoad} \ {blog.author}
          </h1>
          <p className='text-base my-4'>{blog.content}</p>
          <p className='text-base'>{blog.mainContent}</p>
          <p className='text-base'>{blog.content}</p>
          <div className='flex justify-between '>
            <LazyLoad
              className='mr-4 my-8'
              height={563}
              offset={50}
              once
              placeholder={<Spinner />}
            >
              <img
                className='blog-detail-img left-active'
                src={blog.animated.avatar1}
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
                src={blog.animated.avatar2}
                alt=''
              />
            </LazyLoad>
          </div>
          <p className='text-base mt-2 mb-16'>{blog.content}</p>
        </article>
      </div>
    </section>
  );
}

export default BlogDetail;
