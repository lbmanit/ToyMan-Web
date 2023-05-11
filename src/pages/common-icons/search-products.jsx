import React from 'react';
import Search from '../search/search';
function SearchProducts(props) {
  const { handleDisplaySearch } = props;
  return (
    <section className='search-item flex flex-col items-center p-16 downActive'>
      <div className='fixed flex flex-col justify-center items-center'>
        <i
          className='text-4xl cursor-pointer fa fa-times-circle'
          onClick={handleDisplaySearch}
        ></i>
        <div className='search-item-product text-3xl flex py-4'>
          <Search handleDisplaySearch={handleDisplaySearch} />
        </div>
      </div>
    </section>
  );
}

export default SearchProducts;
