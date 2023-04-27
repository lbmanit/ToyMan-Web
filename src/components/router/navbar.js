import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { lazy } from 'react';
import toymanLogo from '../../assets/images/logo/toymanlogo.jpeg';
import Icons from './common-icons/icons';
import Pages from './pages/pages';
const CheckCart = lazy(() => import('./common-icons/check-cart'));
const SearchProducts = lazy(() => import('./common-icons/search-products'));
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
        {/* <LazyLoad height={563} offset={100} once placeholder={<Spinner />}> */}
        <Link to='/' target='_top'>
          <img className='cursor-pointer' src={toymanLogo} alt='logo' />
        </Link>
        {/* </LazyLoad> */}
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
