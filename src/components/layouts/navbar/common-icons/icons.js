import React from 'react';
function Icons(props) {
  const { handleDisplay } = props;
  return (
    <ul className='flex text-xl text-grayDark'>
      <li className='m-4 header-nav' onClick={handleDisplay}>
        <i className='fa fa-search'></i>
      </li>
      <li className='m-4 header-nav' onClick={handleDisplay}>
        <i className='fa fa-shopping-cart'></i>
      </li>
      <li className='m-4 header-nav' onClick={handleDisplay}>
        <i className='fa fa-bars'></i>
      </li>
    </ul>
  );
}

export default Icons;
