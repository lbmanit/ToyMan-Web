import React from 'react';
function Icons(props) {
  const { handleDisplaySearch, handleDisplayCart } = props;
  return (
    <ul className='flex text-xl text-grayDark'>
      <li className='m-4 header-nav' onClick={handleDisplaySearch}>
        <i className='fa fa-search'></i>
      </li>
      <li className='m-4 header-nav' onClick={handleDisplayCart}>
        <i className='fa fa-shopping-cart'></i>
      </li>
      <li className='m-4 header-nav'>
        <i className='fa fa-bars'></i>
      </li>
    </ul>
  );
}

export default Icons;
