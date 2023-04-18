import React from 'react';
import Item from '../items/item';
import { Link } from 'react-router-dom';
import Collections from '../items/collections';
import '../../../assets/css/item.css';
function ItemList() {
  const collections = Collections();
  const item = collections.map((item, index) => {
    return (
      <Link
        className='item-collections'
        key={index}
        to={{
          pathname: `/collections/${item.id}`,
          search: `?toys=${JSON.stringify(collections)}`,
        }}
      >
        <Item {...item} />
      </Link>
    );
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
export default ItemList;
