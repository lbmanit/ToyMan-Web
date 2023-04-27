import React, { useState, useEffect } from 'react';
import LazyLoad from 'react-lazyload';
import { Link } from 'react-router-dom';
import toymanLogo from '../../assets/images/logo/toymanlogo.jpeg';
import Icons from './common-icons/icons';
import SearchProducts from './common-icons/search-products';
import CheckCart from './common-icons/check-cart';
import Pages from './pages/pages';
import Spinner from '../../app/Spinner';

function Navbar() {
  const [isSticky, setSticky] = useState(false);
  const [isDisplaySearch, setIsDisplaySearch] = useState(false);
  const [isDisplayCart, setIsDisplayCart] = useState(false);
  const handleScroll = () => {
    if (window.pageYOffset > 200) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
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
        <Pages />
        <Icons
          handleDisplaySearch={() => setIsDisplaySearch(true)}
          handleDisplayCart={() => setIsDisplayCart(true)}
        />
      </nav>
      {isDisplaySearch && (
        <SearchProducts handleDisplaySearch={() => setIsDisplaySearch(false)} />
      )}
      {isDisplayCart && (
        <CheckCart handleDisplayCart={() => setIsDisplayCart(false)} />
      )}
    </React.Fragment>
  );
}

export default Navbar;
