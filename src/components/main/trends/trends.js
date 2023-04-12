import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../../assets/css/main/trends/trends.css';
function Trends() {
  const styleNav = {
    backgroundColor: '#e83e8c',
    color: '#fff',
    transition: 'all linear 0.3s',
  };
  const [style, setStyle] = useState({
    featured: styleNav,
    bestSellers: {},
    newArrivals: {},
  });

  function handleClick(type) {
    if (type === 'Featured') {
      setStyle({
        ...style,
        featured: styleNav,
        bestSellers: {},
        newArrivals: {},
      });
    } else if (type === 'BestSellers') {
      setStyle({
        ...style,
        featured: {},
        bestSellers: styleNav,
        newArrivals: {},
      });
    } else {
      setStyle({
        ...style,
        featured: {},
        bestSellers: {},
        newArrivals: styleNav,
      });
    }
  }
  return (
    <React.Fragment>
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
          <Link to='/'>Featured</Link>
        </li>
        <li
          className={`m-4 main-nav ${
            style.bestSellers ? 'active' : ''
          } text-xl`}
          style={style.bestSellers}
          onClick={() => handleClick('BestSellers')}
        >
          <Link to='/bestSellers'>Best Sellers</Link>
        </li>
        <li
          className={`m-4 main-nav ${
            style.newArrivals ? 'active' : ''
          } text-xl`}
          style={style.newArrivals}
          onClick={() => handleClick('NewArrivals')}
        >
          <Link to='/newArrivals'>New Arrivals</Link>
        </li>
      </ul>
    </React.Fragment>
  );
}

export default Trends;
