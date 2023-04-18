import React from 'react';
import { Link } from 'react-router-dom';
import Item from '../../../../items/item';
function NewArrivals({ collections }) {
  const newArrivals = collections
    .filter((item) => item.details.mod === 'NEW')
    .slice(0, 6)
    .map((item, index) => {
      return (
        <Link
          key={index}
          className='main-item'
          to={{
            pathname: `/collections/${item.id}`,
            search: `?toys=${JSON.stringify(collections)}`,
          }}
        >
          <Item {...item} />
        </Link>
      );
    });
  return <React.Fragment> {newArrivals}</React.Fragment>;
}

export default NewArrivals;
