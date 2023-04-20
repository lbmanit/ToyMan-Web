import React from 'react';
import Item from '../../../../shop/item';
function NewArrivals({ collections }) {
  const newArrivals = collections
    .filter((item) => item.details.mod === 'NEW')
    .slice(0, 6)
    .map((item, index) => {
      return <Item key={index} {...item} />;
    });
  return <React.Fragment> {newArrivals}</React.Fragment>;
}

export default NewArrivals;
