import React from 'react';
import urlCategoriesData from '../../../data/categories-data.JSON';
import useFetch from '../../../customHooks/useFetch.jsx';
import Category from './category';
function Categories() {
  const { data } = useFetch(urlCategoriesData);
  const newCategories = data.map((category, index) => {
    return <Category key={index} {...category} />;
  });
  return (
    <div className='category-title container mx-auto mt-16 right-active'>
      <h1 className='text-center text-3xl font-semibold'>Shop By Age</h1>
      <h3 className='text-center text-cyan text-xl mt-4 mb-8'>
        Our Collections
      </h3>
      <div className='flex justify-around items-center'>{newCategories}</div>
    </div>
  );
}

export default Categories;
