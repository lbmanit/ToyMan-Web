import React, { useState } from 'react';
import Featured from './nav-trends/featured';
import BestSellers from './nav-trends/best-sellers';
import NewArrivals from './nav-trends/new-arrivals';
import { useContext } from 'react';
import { ItemsContext } from '../../items/hooks/items-context';
function Trends() {
  const data = useContext(ItemsContext);
  const [selectTab, setSelectTab] = useState('featured');
  const styleNav = {
    backgroundColor: '#e83e8c',
    color: '#fff',
    transition: 'all 0.3s linear',
  };
  const [style, setStyle] = useState({
    featured: styleNav,
    bestSellers: {},
    newArrivals: {},
  });
  function handleClick(type) {
    if (type === 'Featured') {
      setSelectTab('featured');
      setStyle({
        ...style,
        featured: styleNav,
        bestSellers: {},
        newArrivals: {},
      });
    } else if (type === 'BestSellers') {
      setSelectTab('bestSellers');
      setStyle({
        ...style,
        featured: {},
        bestSellers: styleNav,
        newArrivals: {},
      });
    } else {
      setSelectTab('newArrivals');
      setStyle({
        ...style,
        featured: {},
        bestSellers: {},
        newArrivals: styleNav,
      });
    }
  }
  return (
    <section className='container m-auto'>
      <h1 className='trends-title text-3xl text-center font-semibold mt-8'>
        We Love Trends
      </h1>
      <h3 className='trends-featured text-xl text-center text-cyan m-6'>
        Featured Products
      </h3>
      <ul className='flex justify-center items-center'>
        <li
          className={`m-4 main-nav ${style.featured ? 'active' : ''} text-xl`}
          style={style.featured}
          onClick={() => handleClick('Featured')}
        >
          <h1>Featured</h1>
        </li>
        <li
          className={`m-4 main-nav ${
            style.bestSellers ? 'active' : ''
          } text-xl`}
          style={style.bestSellers}
          onClick={() => handleClick('BestSellers')}
        >
          <h1>Best Sellers</h1>
        </li>
        <li
          className={`m-4 main-nav ${
            style.newArrivals ? 'active' : ''
          } text-xl`}
          style={style.newArrivals}
          onClick={() => handleClick('NewArrivals')}
        >
          <h1>New Arrivals</h1>
        </li>
      </ul>
      <div className='favorite-items flex flex-wrap my-8'>
        {selectTab === 'featured' && <Featured collections={data} />}
        {selectTab === 'bestSellers' && <BestSellers collections={data} />}
        {selectTab === 'newArrivals' && <NewArrivals collections={data} />}
      </div>
    </section>
  );
}

export default Trends;
