import React, { useEffect, useState } from 'react';
import categoriesData from './categoriesData.js';
import Category from './category.js';
function Categories() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    setCategories(categoriesData);
  }, []);
  const newCategories = categories.map((category, index) => {
    return <Category key={index} {...category} />;
  });
  return (
    <React.Fragment>
      <div className='category-title container m-auto right-active'>
        <h1 className='text-center text-3xl font-semibold'>Shop By Age</h1>
        <h3 className='text-center text-cyan text-xl mt-4 mb-8'>
          Our Collections
        </h3>
        <div className='flex justify-around items-center'>{newCategories}</div>
      </div>
    </React.Fragment>
  );
}

export default Categories;
