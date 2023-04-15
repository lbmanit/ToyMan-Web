import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/404.css';
function Page404() {
  return (
    <section className='left-active'>
      <div className='flex items-center nav-404'>
        <Link to='/'>
          <h1 className='text-cyan text-xl m-2 ml-16'>Home</h1>
        </Link>
        <h1 className='text-cyan text-xl m-2'>/</h1>
        <h1 className='text-pink text-xl m-2'>404 Not Found</h1>
      </div>
      <div className='flex flex-col items-center page-404 justify-center'>
        <h1 className='text-6xl font-extrabold mt-6 mb-2'>Oops! Error 404</h1>
        <p className='text-xl m-4'>
          Sorry, But the page you are looking for doesn't exist!
        </p>
        <button className='text-xl btn-404 px-6 py-2 m-4'>
          <Link to='/'>GO TO HOME PAGE</Link>
        </button>
      </div>
    </section>
  );
}

export default Page404;
