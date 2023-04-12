import React, { useState } from 'react';
import toymanLogo from '../../assets/images/logo/toymanlogo.jpeg';
import LazyLoad from 'react-lazyload';
import Spinner from '../../Spinner';
function Navbar() {
  const [isSticky, setSticky] = useState(false);
  const handleScroll = () => {
    if (window.pageYOffset > 150) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  window.addEventListener('scroll', handleScroll);
  return (
    <nav
      className={`nav ${
        isSticky ? 'sticky' : ''
      } m-auto nav-item flex justify-around items-center py-5`}
    >
      <LazyLoad
        height={563}
        offset={100}
        once
        placeholder={<Spinner />}
      ></LazyLoad>
      <img className='cursor-pointer' src={toymanLogo} alt='logo' />
      <ul className='flex text-xl'>
        <li className='m-4 header-nav'>
          <a href='#'>Home</a>
        </li>
        <li className='m-4 header-nav'>
          <a href='#'>Shop</a>
        </li>
        <li className='m-4 header-nav'>
          <a href='#'>Blog</a>
        </li>
        <li className='m-4 header-nav'>
          <a href='#'>Pages</a>
        </li>
        <li className='m-4 header-nav'>
          <a href='#'>Contact</a>
        </li>
      </ul>
      <ul className='flex text-xl text-grayDark'>
        <li className='m-4 header-nav'>
          <i className='fa fa-search'></i>
        </li>
        <li className='m-4 header-nav'>
          <i className='fa fa-shopping-cart'></i>
        </li>
        <li className='m-4 header-nav'>
          <i className='fa fa-bars'></i>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
