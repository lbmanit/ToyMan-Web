import React from 'react';
import Item from '../shop/item';
import { Link } from 'react-router-dom';
import itemsData from '../../../data/itemsData';
import '../../../assets/css/item.css';
function Collections() {
  const item = itemsData.map((item, index) => {
    return <Item key={index} {...item} />;
  });
  return (
    <section className='left-active'>
      <div className='text-xl font-bold nav-collections flex items-center'>
        <div className='container m-auto flex'>
          <Link className='text-cyan' to='/'>
            Home
          </Link>
          <h1 className='text-cyan mx-2'>/</h1>
          <h1 className='text-pink'>Collections</h1>
        </div>
      </div>
      <div className='container m-auto flex flex-wrap my-16'>{item}</div>
    </section>
  );
}
export default Collections;
