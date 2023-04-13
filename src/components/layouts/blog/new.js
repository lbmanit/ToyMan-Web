import React from 'react';
import LazyLoad from 'react-lazyload';
import Spinner from '../../../Spinner';
import { Link } from 'react-router-dom';
import '../../../assets/css/blog.css';

function New({ blogs }) {
  const blog = blogs.map((blog, index) => {
    return (
      <article className='blog p-4' key={index}>
        <div className='relative'>
          <LazyLoad height={563} offset={100} once placeholder={<Spinner />}>
            <img src={blog.image} alt={blog.title} />
            <h2 className='date-blog absolute top-full z-50x px-4 py-1 -mt-6 text-base'>
              {blog.dateUpLoad}
            </h2>
          </LazyLoad>
        </div>
        <h1 className='text-xl font-bold mt-8 mb-4 hover:text-cyan cursor-pointer'>
          {blog.title}
        </h1>
        <p className='content-blog'>{blog.content}</p>
      </article>
    );
  });
  return (
    <section className='left-active'>
      <div className='flex nav-blog items-center'>
        <Link className='text-xl text-cyan ml-10' to='/'>
          Home
        </Link>
        <h1 className='text-xl text-cyan mx-4'>/</h1>
        <h1 className='text-xl text-pink'>News</h1>
      </div>
      <div className='m-auto flex flex-wrap p-10'>{blog}</div>
      <div className='flex justify-center text-pink'>
        <i className='far fa-arrow-alt-circle-left'>a</i>
        <i className='far fa-arrow-alt-circle-right'>b</i>
      </div>
    </section>
  );
}

export default New;
