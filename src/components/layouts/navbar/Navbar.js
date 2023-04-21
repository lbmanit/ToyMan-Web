import React, { useState, useEffect } from 'react';
import LazyLoad from 'react-lazyload';
import { Link } from 'react-router-dom';
import toymanLogo from '../../../assets/images/logo/toymanlogo.jpeg';
import Spinner from '../../../Spinner';
import Icons from './common-icons/icons';
import SearchProducts from './common-icons/search-products';
import Pages from './pages/pages';

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
        <Icons handleDisplay={() => setIsDisplay(true)} />
      </nav>
      {isDisplay && (
        <SearchProducts handleDisplay={() => setIsDisplay(false)} />
      )}
    </React.Fragment>
  );
}

export default Navbar;
