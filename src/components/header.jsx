import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import toymanLogo from '../assets/images/logo/toymanlogo.jpeg';
import Icons from '../pages/common-icons/icons';
import CheckCart from '../pages/common-icons/check-cart';
import SearchProducts from '../pages/common-icons/search-products';
import WishList from '../pages/common-icons/wish-list';
function Header() {
  const [isSticky, setSticky] = useState(false);
  const [isDisplaySearch, setIsDisplaySearch] = useState(false);
  const [isDisplayCart, setIsDisplayCart] = useState(false);
  const [isDisplayWish, setIsDisplayWish] = useState(false);
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
        <Link to='/'>
          <img className='cursor-pointer' src={toymanLogo} alt='logo' />
        </Link>
        <ul className='flex text-xl'>
          <li className='m-4 header-nav'>
            <Link to='/'>Home</Link>
          </li>
          <li className='m-4 header-nav'>
            <Link to='/collections'>Shop</Link>
          </li>
          <li className='m-4 header-nav'>
            <Link to='/blogs'>Blog</Link>
          </li>
          <li className='m-4 header-nav'>
            <Link to='/pages'>Pages</Link>
          </li>
          <li className='m-4 header-nav'>
            <Link to='/contact'>Contact</Link>
          </li>
        </ul>
        <Icons
          handleDisplaySearch={() => setIsDisplaySearch(true)}
          handleDisplayCart={() => setIsDisplayCart(true)}
          handleDisplayWish={() => setIsDisplayWish(true)}
        />
      </nav>
      {isDisplaySearch && (
        <SearchProducts handleDisplaySearch={() => setIsDisplaySearch(false)} />
      )}
      {isDisplayCart && (
        <CheckCart handleDisplayCart={() => setIsDisplayCart(false)} />
      )}
      {isDisplayWish && (
        <WishList handleDisplayWish={() => setIsDisplayWish(false)} />
      )}
    </React.Fragment>
  );
}

export default Header;
