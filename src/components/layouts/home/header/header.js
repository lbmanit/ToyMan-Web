import React from 'react';
import { Link } from 'react-router-dom';
import Intro from './Intro';
function Header() {
  return (
    <header>
      <div className='bg-light'>
        <p className='text-cyan text-center text-base py-6'>
          Get 35% off for&nbsp;
          <Link
            className='hover:text-pink transition-colors underline'
            to='/collections'
          >
            Summer Collection
          </Link>
          &nbsp;- 2023
        </p>
      </div>
      <Intro />
    </header>
  );
}

export default Header;
