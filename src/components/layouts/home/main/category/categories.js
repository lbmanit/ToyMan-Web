import React, { lazy, useState } from 'react';
import categoriesData from '../../../../../data/categoriesData.js';
import LazyLoad from 'react-lazyload';
import Spinner from '../../../../../app/Spinner.js';
const Category = lazy(() => import('./category.js'));
function Categories() {
  const [categories, setCategories] = useState(categoriesData);
  const newCategories = categories.map((category, index) => {
    return <Category key={index} {...category} />;
  });
  return (
    <React.Fragment>
      <LazyLoad height={563} offset={100} once placeholder={<Spinner />}>
        <div className='category-title container mx-auto mt-16 right-active'>
          <h1 className='text-center text-3xl font-semibold'>Shop By Age</h1>
          <h3 className='text-center text-cyan text-xl mt-4 mb-8'>
            Our Collections
          </h3>
          <div className='flex justify-around items-center'>
            {newCategories}
          </div>
        </div>
      </LazyLoad>
    </React.Fragment>
  );
}

export default Categories;
