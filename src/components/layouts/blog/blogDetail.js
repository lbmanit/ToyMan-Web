import React, { useState } from 'react';
import LazyLoad from 'react-lazyload';
import { useLocation, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Spinner from '../../../Spinner';
import '../../../assets/css/blog.css';
function BlogDetail() {
  const { id } = useParams();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const blogs = JSON.parse(searchParams.get('blogs'));
  const mainBlog = blogs.find((blog) => blog.id === parseInt(id));
  const [change, setChange] = useState(false);
  function handleChange() {
    setChange(true);
    setTimeout(() => setChange(false), 500);
  }
  const relatedBlogs = blogs
    .filter((blog) => blog.id !== parseInt(id))
    .slice(0, 3)
    .map((blog) => {
      return (
        <article key={blog.id} className='recent-blog' onClick={handleChange}>
          <Link
            className='flex justify-between items-center my-6'
            to={{
              pathname: `/news/${blog.id}`,
              search: `?blogs=${JSON.stringify(blogs)}`,
            }}
          >
            <LazyLoad
              className='w-1/3'
              height={563}
              offset={100}
              once
              placeholder={<Spinner />}
            >
              <img
                className='w-full blog-img'
                src={blog.image}
                alt={blog.title}
              />
            </LazyLoad>
            <div className='w-2/3 mx-4'>
              <h1 className='my-2'>{blog.dateUpLoad}</h1>
              <h1 className='my-2 text-base font-bold'>{blog.title}</h1>
            </div>
          </Link>
        </article>
      );
    });
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
        <h1 className='text-pink text-xl m-2'>{mainBlog.title}</h1>
      </div>

      <div className='container m-auto flex overflow-hidden my-20 left-active'>
        <aside className={`w-1/4 mx-16 ${change ? 'left-active' : ''} `}>
          <div>
            <h1 className='text-xl font-bold'>Search</h1>
            <div className='search-store text-base flex justify-between items-center my-6 py-3 px-4'>
              <input
                className='search-store-input px-2'
                type='text'
                placeholder='Search our store'
              />
              <i className='search-store-icon fa fa-search px-2'></i>
            </div>
          </div>
          <div>
            <h1 className='text-xl font-bold my-8'>Recent Post</h1>
            {relatedBlogs}
          </div>
        </aside>
        <article className={`w-3/4 ${change ? 'left-active' : ''}`}>
          {mainBlog && (
            <div>
              <LazyLoad height={563} offset={100} once>
                <img
                  className='blog-detail-img w-full'
                  src={mainBlog.image}
                  alt={mainBlog.title}
                />
              </LazyLoad>
              <h1 className='text-3xl my-8'>{mainBlog.title}</h1>
              <h1 className='blog-detail-date text-lg -mt-4 mb-4'>
                {mainBlog.dateUpLoad} \ {mainBlog.author}
              </h1>
              <p className='text-base mt-4'>{mainBlog.content}</p>
              <p className='text-lg m-4 px-4 main-content'>
                {mainBlog.mainContent}
              </p>
              <p className='text-base'>{mainBlog.content}</p>
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
                    src={mainBlog.animated.avatar1}
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
                    src={mainBlog.animated.avatar2}
                    alt=''
                  />
                </LazyLoad>
              </div>
              <p className='text-base mt-2'>{mainBlog.content}</p>
            </div>
          )}
        </article>
      </div>
    </section>
  );
}

export default BlogDetail;
