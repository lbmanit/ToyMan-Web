import React from 'react';
import Item from './item';
import { Link } from 'react-router-dom';
import Collections from './collections';
function ItemList() {
  const memoizedCollections = Collections();
  const item = memoizedCollections.map((item, index) => {
    return (
      <Link
        key={index}
        to={{
          pathname: `/collections/${item.id}`,
          search: `?toys=${JSON.stringify(memoizedCollections)}`,
        }}
      >
        <Item {...item} />
      </Link>
    );
  });
  return <div>{item}</div>;
}
export default ItemList;
