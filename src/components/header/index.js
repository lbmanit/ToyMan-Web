import React from 'react';
import Navbar from './Navbar';
import Intro from './Intro';
import '../../assets/css/header/header.css';
function Header() {
  return (
    <header>
      <div className='bg-light'>
        <p className='text-cyan text-center py-2'>
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
      <Navbar />
      <Intro />
    </header>
  );
}

export default Header;
