import React from 'react';
import LazyLoad from 'react-lazyload';
import Spinner from '../../../Spinner';
import { Link } from 'react-router-dom';
import '../../../assets/css/blog.css';
import { useState } from 'react';

function New({ blogs }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [countPage, setCountPage] = useState(1);
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
  function handlePrevClick() {
    setCountPage((prevCount) => prevCount--);
    const newIndex = currentIndex === 0 ? blogs.length - 6 : currentIndex - 6;
    setCurrentIndex(newIndex);
  }
  function handleNextClick() {
    setCountPage((prevCount) => prevCount++);
    const newIndex = currentIndex === blogs.length - 6 ? 0 : currentIndex + 6;
    setCurrentIndex(newIndex);
  }
  return (
    <section className='left-active'>
      <div className='flex nav-blog items-center'>
        <Link className='text-xl text-cyan m-2 ml-16' to='/'>
          Home
        </Link>
        <h1 className='text-xl text-cyan m-2 '>/</h1>
        <h1 className='text-xl text-pink  m-2 '>News</h1>
      </div>
      <div className='m-auto flex flex-wrap p-10'>{blog}</div>
      <div className='flex justify-center text-pink'>
        <i className='far fa-arrow-alt-circle-left' onClick={handlePrevClick}>
          a
        </i>
        <h1>{countPage}</h1>
        <i className='far fa-arrow-alt-circle-right' onClick={handleNextClick}>
          b
        </i>
      </div>
    </section>
  );
}

export default New;
