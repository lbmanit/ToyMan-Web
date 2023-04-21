import React from 'react';
import Search from '../../Search';
function SearchProducts(props) {
  const { handleDisplay } = props;
  return (
    <section className='search-item flex flex-col items-center p-16 right-active'>
      <div className='fixed flex flex-col justify-center items-center'>
        <i
          className='text-4xl cursor-pointer fa fa-times-circle'
          onClick={handleDisplay}
        ></i>
        <div className='search-item-product text-3xl flex py-4'>
          <Search handleDisplay={handleDisplay} />
        </div>
      </div>
    </section>
  );
}

export default SearchProducts;
