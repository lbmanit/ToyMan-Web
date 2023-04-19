import React from 'react';
import Item from '../../../../shop/item';
function BestSellers({ collections }) {
  const bestSellers = collections
    .filter((item) => item.details.mod === 'SALE')
    .slice(0, 6)
    .map((item) => {
      return <Item {...item} />;
    });
  return <React.Fragment>{bestSellers}</React.Fragment>;
}

export default BestSellers;
