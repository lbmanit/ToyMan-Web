import React from 'react';
import { Link } from 'react-router-dom';
import Item from '../../../../items/item';
function BestSellers({ collections }) {
  const bestSellers = collections
    .filter((item) => item.details.mod === 'SALE')
    .slice(0, 6)
    .map((item, index) => {
      return (
        <Link
          className='main-item'
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
  return <React.Fragment>{bestSellers}</React.Fragment>;
}

export default BestSellers;
