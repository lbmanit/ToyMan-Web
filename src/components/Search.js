import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import LazyLoad from 'react-lazyload';
import Spinner from '../Spinner';

function Search({ products }) {
  const [searchValue, setSearchValue] = useState('');
  const [searchProducts, setSearchProducts] = useState([]);
  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };
  useEffect(() => {
    const results = products.filter((product) => {
      const hasTag = product.tags && product.tags.includes(searchValue);
      const hasTitle = product.title.includes(searchValue);
      return hasTag || hasTitle;
    });
    setSearchProducts(results);
  }, [products, searchValue]);
  const handleLinkClick = (product) => {
    if (searchValue) {
      if (product.type === 'blog') {
        return {
          pathname: `/news/${product.id}`,
          search: `?blogs=${JSON.stringify(products)}`,
        };
      } else if (product.type === 'item') {
        return {
          pathname: `/items/${product.id}`,
          search: `?toys=${JSON.stringify(products)}`,
        };
      }
    } else {
      return {
        pathname: '/news',
      };
    }
  };
  return (
    <div className='left-active'>
      <input
        className='search-store-input'
        type='text'
        value={searchValue}
        onChange={handleChange}
      />
      {searchValue &&
        searchProducts.map((product) => {
          return (
            <Link
              className='flex justify-between items-center my-6'
              to={handleLinkClick(product)}
            >
              <LazyLoad
                className='w-1/3'
                height={50}
                offset={50}
                once
                placeholder={<Spinner />}
              >
                <img
                  className='w-full  rounded-xl'
                  src={`${
                    product.type === 'blog' ? product.image : product.avatarUrl
                  }`}
                  alt={`${
                    product.type === 'blog' ? product.title : product.name
                  }`}
                />
              </LazyLoad>
              <h1 className='w-2/3 mx-4 text-lg font-bold'>{product.title}</h1>
            </Link>
          );
        })}
    </div>
  );
}

export default Search;
