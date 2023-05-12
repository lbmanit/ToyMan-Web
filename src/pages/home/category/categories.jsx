import React, { useEffect, useState } from 'react';
import categoriesData from '../../../data/categories-data';
import Category from './category';
function Categories() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    setCategories(categoriesData);
  }, []);
  const newCategories = categories.map((category, index) => {
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
