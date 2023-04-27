import React from 'react';
import { Link } from 'react-router-dom';
function Pages() {
  return (
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
  );
}

export default Pages;
