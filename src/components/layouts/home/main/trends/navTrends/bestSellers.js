import React from 'react';
import Item from '../../../../../item';
function BestSellers(props) {
  const bestSellers = props.itemsData
    .filter((item) => item.details.mod === 'SALE')
    .slice(0, 6)
    .map((item, index) => {
      return <Item key={index} {...item} />;
    });
  return <React.Fragment>{bestSellers}</React.Fragment>;
}

export default BestSellers;
