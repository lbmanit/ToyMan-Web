import React, { useState } from 'react';
import LazyLoad from 'react-lazyload';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Spinner from '../../../components/spinner';
import RelatedBlogs from './related-blogs';
import { useContext } from 'react';
import { BlogContext } from '../hooks/blog-context';
import Search from '../../search/search';
function DetailBlog() {
  const dataBlogs = useContext(BlogContext);
  const [change, setChange] = useState(false);
  const { id } = useParams();
  const mainBlog = dataBlogs.find((blog) => parseInt(blog.id) === parseInt(id));
  const { image, title, content, mainContent, animated, dateUpLoad, author } =
    mainBlog;
  const relatedBlogs = dataBlogs
    .filter((blog) => blog !== mainBlog)
    .slice(0, 3)
    .map((blog) => {
      return (
        <Link
          key={blog.id}
          className='flex justify-between items-center my-6'
          to={`${blog.id}`}
        >
          <RelatedBlogs {...blog} handleChange={handleChange} />
        </Link>
      );
    });
  function handleChange() {
    setChange(true);
    setTimeout(() => setChange(false), 500);
  }
  return (
    <section className='left-active'>
      <div className='flex nav-blog'>
        <div className='container m-auto flex items-center font-bold'>
          <Link to='/'>
            <h1 className='text-cyan text-xl m-2 ml-16'>Home</h1>
          </Link>
          <h1 className='text-cyan text-xl m-2'>/</h1>
          <Link to='..' relative='path'>
            <h1 className='text-cyan text-xl m-2'>Blog</h1>
          </Link>
          <h1 className='text-cyan text-xl m-2'>/</h1>
          <h1 className='text-pink text-xl m-2'>{mainBlog.title}</h1>
        </div>
      </div>
      <div className='container m-auto flex overflow-hidden my-20 left-active'>
        <aside className={`w-1/4 mx-16 ${change ? 'left-active' : ''} `}>
          <div>
            <h1 className='text-xl font-bold'>Search</h1>
            <div className='search-store text-base my-6 py-3 px-4'>
              <Search />
            </div>
          </div>
          <div>
            <h1 className='text-xl font-bold my-8'>Recent Post</h1>
            {relatedBlogs}
          </div>
        </aside>
        <article className={`w-3/4 ${change ? 'left-active' : ''}`}>
          <LazyLoad offset={100} once>
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
              offset={100}
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
              offset={100}
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
        </article>
      </div>
    </section>
  );
}

export default DetailBlog;
