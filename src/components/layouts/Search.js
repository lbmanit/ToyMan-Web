import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import itemsData from '../../data/itemsData';
import blogsData from '../../data/blogsData';
import { encode } from 'base-64';
function Search(props) {
  const products = itemsData.concat(blogsData);
  const [searchValue, setSearchValue] = useState('');
  const [searchProducts, setSearchProducts] = useState([]);
  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };
  useEffect(() => {
    const results = products.filter((product) => {
      const hasTag = product.tags.includes(searchValue);
      const hasTitle = product.title.includes(searchValue);
      return hasTag || hasTitle;
    });
    setSearchProducts(results);
  }, [searchValue]);
  const handleLinkClick = (product) => {
    if (searchValue) {
      if (product.type === 'blog') {
        return {
          pathname: `/news/${product.id}`,
          search: `?blogs=${JSON.stringify(products)}`,
        };
      } else if (product.type === 'item') {
        return {
          pathname: `/collections/${product.id}`,
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
        placeholder='Search our store...'
        value={searchValue}
        onChange={handleChange}
      />
      <div
        className={`${searchValue ? 'list-item-search p-4' : ''}`}
        onClick={props.handleDisplay}
      >
        {searchValue && <h1 className='font-bold m-4'>Products</h1>}
        {searchValue && searchProducts.length === 0 && (
          <p className='font-bold mx-4'>
            Your search for "{searchValue}" did not yield any results.
          </p>
        )}
        {searchValue && searchProducts.length !== 0 && (
          <p className='font-bold mx-4'>
            Search: {searchProducts.length} results found for "{searchValue}"
          </p>
        )}
        {searchValue &&
          searchProducts.map((product, index) => {
            return (
              <Link
                key={index}
                className='flex justify-center items-center left-active my-5'
                to={handleLinkClick(product)}
              >
                <img
                  className='w-1/4 rounded-xl'
                  src={`${
                    product.type === 'blog' ? product.image : product.avatarUrl
                  }`}
                  alt={`${product.title}`}
                />
                <div className='w-2/3 mx-4'>
                  <h1 className='text-lg font-bold'>{product.title}</h1>
                  {product.type === 'item' && (
                    <h1 className='text-lg font-bold text-cyan'>
                      $
                      {product.details.mod === 'SALE'
                        ? product.salePrice
                        : product.price}
                    </h1>
                  )}
                </div>
              </Link>
            );
          })}
      </div>
    </div>
  );
}

export default Search;
