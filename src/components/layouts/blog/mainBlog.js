import React, { useState } from 'react';
import { useLocation, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Blog from './blog';
import BlogDetail from './blogDetail';
import '../../../assets/css/blog.css';
import Search from '../../Search';
import Collections from '../items/collections';
function MainBlog() {
  const collections = Collections();
  const { id } = useParams();
  const location = useLocation();
  let blogs = [];
  const searchParams = new URLSearchParams(location.search);
  const blogsParam = searchParams.get('blogs');
  if (blogsParam) {
    try {
      blogs = JSON.parse(blogsParam);
    } catch (error) {
      console.error(error);
    }
  }
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
        <Link
          key={blog.id}
          className='flex justify-between items-center my-6'
          to={{
            pathname: `/news/${blog.id}`,
            search: `?blogs=${JSON.stringify(blogs)}`,
          }}
        >
          <Blog {...blog} handleChange={handleChange} />
        </Link>
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
            <div className='search-store text-base my-6 py-3 px-4'>
              <Search products={blogs.concat(collections)} />
            </div>
          </div>
          <div>
            <h1 className='text-xl font-bold my-8'>Recent Post</h1>
            {relatedBlogs}
          </div>
        </aside>
        <article className={`w-3/4 ${change ? 'left-active' : ''}`}>
          {mainBlog && <BlogDetail {...mainBlog} />}
        </article>
      </div>
    </section>
  );
}

export default MainBlog;
