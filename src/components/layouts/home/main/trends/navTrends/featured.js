import React from 'react';
import { Link } from 'react-router-dom';
import Item from '../../../../shop/item';
function Featured({ collections }) {
  const featured = collections.slice(0, 6).map((item, index) => {
    return <Item {...item} />;
  });
  return <React.Fragment>{featured}</React.Fragment>;
}

export default Featured;
