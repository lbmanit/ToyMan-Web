import React, { useState } from 'react';
import { BrowserRouter, HashRouter, Routes, Route } from 'react-router-dom';
import itemsData from '../../../data/itemsData';
import Featured from './navTrends/featured';
import BestSellers from './navTrends/bestSellers';
import NewArrivals from './navTrends/newArrivals';
import Trends from './trends';
function FavoriteItems() {
  const [favoriteItems, setFavoriteItems] = useState(itemsData);
  const featured = favoriteItems.slice(0, 6).map((item) => {
    return <Featured key={item.id} {...item} />;
  });

  const bestSellers = favoriteItems
    .filter((item) => item.details.mod === 'SALE')
    .slice(0, 6)
    .map((item) => {
      return <BestSellers key={item.id} {...item} />;
    });

  const newArrivals = favoriteItems
    .filter((item) => item.details.mod === 'NEW')
    .slice(0, 6)
    .map((item) => {
      return <NewArrivals key={item.id} {...item} />;
    });
  return (
    <div className='container m-auto jumpActive'>
      <HashRouter>
        <Trends />
        <div className='favorite-items flex flex-wrap jumpActive'>
          <Routes>
            <Route path='/' element={featured}></Route>
            <Route path='/bestSellers' element={bestSellers}></Route>
            <Route path='/newArrivals' element={newArrivals}></Route>
          </Routes>
        </div>
      </HashRouter>
    </div>
  );
}

export default FavoriteItems;
