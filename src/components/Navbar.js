import React, { useState, useEffect } from 'react';
import toymanLogo from '../assets/images/logo/toymanlogo.jpeg';
import LazyLoad from 'react-lazyload';
import Spinner from '../Spinner';
import Search from './Search';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isSticky, setSticky] = useState(false);
  const [isDisplay, setIsDisplay] = useState(false);
  const handleScroll = () => {
    if (window.pageYOffset > 200) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  function handleDisplay() {
    setIsDisplay(false);
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <React.Fragment>
      <nav
        className={`nav ${
          isSticky ? 'sticky' : ''
        } m-auto nav-item flex justify-around items-center py-5`}
      >
        <LazyLoad height={563} offset={100} once placeholder={<Spinner />}>
          <Link to='/'>
            <img className='cursor-pointer' src={toymanLogo} alt='logo' />
          </Link>
        </LazyLoad>
        <ul className='flex text-xl'>
          <li className='m-4 header-nav'>
            <Link to='/'>Home</Link>
          </li>
          <li className='m-4 header-nav'>
            <Link to='/collections'>Shop</Link>
          </li>
          <li className='m-4 header-nav'>
            <Link to='/news'>Blog</Link>
          </li>
          <li className='m-4 header-nav'>
            <Link to='/pages'>Pages</Link>
          </li>
          <li className='m-4 header-nav'>
            <Link to='Contact'>Contact</Link>
          </li>
        </ul>
        <ul className='flex text-xl text-grayDark'>
          <li className='m-4 header-nav' onClick={() => setIsDisplay(true)}>
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
      {isDisplay && (
        <section
          className={`search-item ${
            isDisplay ? 'display-active' : 'hide-active'
          } flex flex-col items-center p-16`}
        >
          <i
            className='text-4xl cursor-pointer fa fa-times-circle'
            onClick={() => setIsDisplay(false)}
          ></i>
          <div className='search-item-product text-3xl flex py-4'>
            <Search handleDisplay={handleDisplay} />
          </div>
        </section>
      )}
    </React.Fragment>
  );
}

export default Navbar;
