import React from 'react';
import Intro from './Intro';
import '../../../../assets/css/header/header.css';
function Header() {
  return (
    <header>
      <div className='bg-light'>
        <p className='text-cyan text-center text-base py-6'>
          Get 35% off for&nbsp;
          <a
            className='hover:text-pink transition-colors'
            href='#'
            style={{ textDecoration: 'underline' }}
          >
            Summer Collection
          </a>
          &nbsp;- 2023
        </p>
      </div>
      <Intro />
    </header>
  );
}

export default Header;