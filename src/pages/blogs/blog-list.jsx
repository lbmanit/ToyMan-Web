import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazyload';
import { useContext } from 'react';
import { BlogContext } from './hooks/blog-context';
import { useCallback } from 'react';
function BlogList() {
  const dataBlogs = useContext(BlogContext);
  const [countPage, setCountPage] = useState(1);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [change, setChange] = useState(false);
  const [hoverIndex, setHoverIndex] = useState(null);
  const blogsInPage = 6;
  const endIndex = currentIndex + blogsInPage;
  const blogs = dataBlogs.slice(currentIndex, endIndex).map((blog, index) => {
    const styleImg = {
      transform: hoverIndex === index ? 'scale(1.2)' : 'none',
    };
    return (
      <Link key={index} className='blog p-4 cursor-pointer' to={`${blog.id}`}>
        <article
          onMouseOver={() => setHoverIndex(index)}
          onMouseOut={() => setHoverIndex(null)}
        >
          <div className='relative img-wrapper'>
            <LazyLoad className='img-wrapper' offset={100} once>
              <img style={styleImg} src={blog.image} alt={blog.title} />
            </LazyLoad>
            <h2 className='date-blog absolute top-full px-4 py-1 ml-2 -mt-10 text-base'>
              {blog.dateUpLoad}
            </h2>
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
    if (countPage >= Math.ceil(dataBlogs.length / blogsInPage)) {
      return;
    } else {
      setChange(true);
      setCountPage(countPage + 1);
      const newIndex =
        currentIndex === dataBlogs.length - blogsInPage
          ? currentIndex
          : currentIndex + blogsInPage;
      setCurrentIndex(newIndex);
    }
  }, [countPage, dataBlogs.length, currentIndex]);
  const handleDecrement = useCallback(() => {
    if (countPage === 1) {
      return;
    } else {
      setChange(false);
      setCountPage(countPage - 1);
      const newIndex = currentIndex === 0 ? 0 : currentIndex - blogsInPage;
      setCurrentIndex(newIndex);
    }
  }, [countPage, dataBlogs.length, currentIndex]);
  return (
    <React.Fragment>
      <div className='flex nav-blog'>
        <div className='container m-auto flex items-center font-bold'>
          <Link to='..'>
            <h1 className='text-cyan text-xl m-2 ml-16'>Home</h1>
          </Link>
          <h1 className='text-cyan text-xl m-2'>/</h1>
          <h1 className='text-pink text-xl m-2'>News</h1>
        </div>
      </div>
      <div
        className={`m-auto flex flex-wrap p-10 ${
          change ? 'right-active' : 'left-active'
        }`}
      >
        {blogs}
      </div>
      <div className='flex justify-center items-center mb-8'>
        <i
          className={`fa fa-angle-left product text-3xl mx-4`}
          onClick={handleDecrement}
        ></i>
        <h1 className='bg-cyan text-white text-xl count-page'>{countPage}</h1>
        <i
          className={`fa fa-angle-right product text-3xl mx-4`}
          onClick={handleIncrement}
        ></i>
      </div>
    </React.Fragment>
  );
}

export default BlogList;
