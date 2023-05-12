import React from 'react';
import HomePreviewItem from '../../home-items/home-preview-item';
function NewArrivals({ collections }) {
  const newArrivals = collections
    .filter((item) => item.details.mod === 'NEW')
    .slice(0, 6)
    .map((item, index) => {
      return <HomePreviewItem key={index} {...item} />;
    });
  return <React.Fragment> {newArrivals}</React.Fragment>;
}

export default NewArrivals;
