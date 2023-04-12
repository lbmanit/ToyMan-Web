import React from 'react';
import Item from '../item';
function Featured(props) {
  const featured = props.itemsData.slice(0, 6).map((item, index) => {
    return <Item key={index} {...item} />;
  });
  return <React.Fragment>{featured}</React.Fragment>;
}

export default Featured;
