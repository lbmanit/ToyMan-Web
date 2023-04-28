import React from 'react';
import { Link } from 'react-router-dom';
import { lazy } from 'react';
import LazyLoad from 'react-lazyload';
import Spinner from '../../../../app/Spinner';
const Intro = lazy(() => import('./Intro'));
function Header() {
  return (
    <LazyLoad height={563} offset={100} once placeholder={<Spinner />}>
      <header>
        <div className='bg-light'>
          <p className='text-cyan text-center text-base py-6'>
            Get 35% off for&nbsp;
            <Link
              className='hover:text-pink transition-colors underline'
              to='/collections'
              // style={{ textDecoration: 'underline' }}
            >
              Summer Collection
            </Link>
            &nbsp;- 2023
          </p>
        </div>
        <Intro />
      </header>
    </LazyLoad>
  );
}

export default Header;
