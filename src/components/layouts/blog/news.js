import React, { useCallback, useState } from 'react';
import LazyLoad from 'react-lazyload';
import Spinner from '../../../Spinner';
import { Link } from 'react-router-dom';
import '../../../assets/css/blog.css';
function News({ blogs }) {
  const [countPage, setCountPage] = useState(1);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [change, setChange] = useState(false);
  const [hoverIndex, setHoverIndex] = useState(null);
  const blogsInPage = 6;
  const endIndex = currentIndex + blogsInPage;
  const blog = blogs.slice(currentIndex, endIndex).map((blog, index) => {
    const styleImg = {
      transform: hoverIndex === index ? 'scale(1.2)' : 'none',
    };
    return (
      <Link
        key={index}
        className='blog p-4 cursor-pointer'
        to={{
          pathname: `/news/${blog.id}`,
          search: `?blogs=${JSON.stringify(blogs)}`,
        }}
      >
        <article
          onMouseOver={() => setHoverIndex(index)}
          onMouseOut={() => setHoverIndex(null)}
        >
          <div className='relative'>
            <LazyLoad
              className='img-wrapper'
              height={563}
              offset={100}
              once
              placeholder={<Spinner />}
            >
              <img style={styleImg} src={blog.image} alt={blog.title} />
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
      </Link>
    );
  });
  const handleIncrement = useCallback(() => {
    if (countPage >= Math.ceil(blogs.length / blogsInPage)) {
      return;
    } else {
      setChange(true);
      setCountPage(countPage + 1);
      const newIndex =
        currentIndex === blogs.length - blogsInPage
          ? currentIndex
          : currentIndex + blogsInPage;
      setCurrentIndex(newIndex);
    }
  }, [countPage, blogs.length, currentIndex]);
  const handleDecrement = useCallback(() => {
    if (countPage === 1) {
      return;
    } else {
      setChange(false);
      setCountPage(countPage - 1);
      const newIndex = currentIndex === 0 ? 0 : currentIndex - blogsInPage;
      setCurrentIndex(newIndex);
    }
  }, [countPage, blogs.length, currentIndex]);
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
      <div
        className={`m-auto flex flex-wrap p-10 ${
          change ? 'right-active' : 'left-active'
        }`}
      >
        {blog}
      </div>
      <div className='flex justify-center items-center mb-8'>
        <i
          className={`fa fa-angle-left text-3xl mx-4`}
          onClick={handleDecrement}
        ></i>
        <h1 className='bg-cyan text-white text-xl count-page'>{countPage}</h1>
        <i
          className={`fa fa-angle-right text-3xl mx-4`}
          onClick={handleIncrement}
        ></i>
      </div>
    </section>
  );
}

export default News;
