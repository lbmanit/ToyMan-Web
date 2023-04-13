import React, { useState } from 'react';
import LazyLoad from 'react-lazyload';
import Spinner from '../../../Spinner';
import { Link } from 'react-router-dom';
import '../../../assets/css/blog.css';

function New({ blogs }) {
  const [countPage, setCountPage] = useState(1);
  const [currentIndex, setCurrentIndex] = useState(0);
  const blogsInPage = 6;
  const endIndex = currentIndex + blogsInPage;
  const blog = blogs.slice(currentIndex, endIndex).map((blog, index) => {
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
    if (currentIndex === 0) return;
    setCountPage((prevCount) => prevCount - 1);
    const newIndex = currentIndex === 0 ? 0 : currentIndex - blogsInPage;
    setCurrentIndex(newIndex);
  }
  function handleNextClick() {
    if (currentIndex === blogs.length - 1) return;
    setCountPage((prevCount) => prevCount + 1);
    const newIndex =
      currentIndex === blogs.length - blogsInPage
        ? currentIndex
        : currentIndex + blogsInPage;
    setCurrentIndex(newIndex);
  }
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
      <div className='flex justify-center items-center mb-8'>
        <i
          className={`fa fa-angle-left text-3xl mx-4 ${
            currentIndex === 0 ? 'hidden' : ''
          }`}
          onClick={handlePrevClick}
        ></i>
        <h1 className='bg-cyan text-white text-xl count-page'>{countPage}</h1>
        <i
          className={`fa fa-angle-right text-3xl mx-4 ${
            currentIndex >= blogs.length - 6 ? 'hidden' : ''
          }`}
          onClick={handleNextClick}
        ></i>
      </div>
    </section>
  );
}

export default New;
