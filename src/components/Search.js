import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
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
      {searchValue &&
        searchProducts.map((product, index) => {
          return (
            <Link
              key={index}
              className='flex justify-between items-center my-6'
              to={handleLinkClick(product)}
            >
              <img
                className='w-1/3  rounded-xl'
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
  );
}

export default Search;
