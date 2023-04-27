import React from 'react';
import { Link } from 'react-router-dom';
import BlogList from './blog-list';
// import LazyLoad from 'react-lazyload';
// import Spinner from '../../../app/Spinner';
function News() {
  return (
    <section className='left-active'>
      <div className='flex nav-blog'>
        <div className='container m-auto flex items-center font-bold nav-blog'>
          <Link className='text-xl text-cyan' to='/'>
            Home
          </Link>
          <h1 className='text-xl text-cyan mx-2'>/</h1>
          <h1 className='text-xl text-pink'>News</h1>
        </div>
      </div>
      <BlogList />
    </section>
  );
}

export default News;
