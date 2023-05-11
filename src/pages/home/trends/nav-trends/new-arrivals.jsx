import React from 'react';
import PreviewItem from '../../../items/preview-item/preview-item';
function NewArrivals({ collections }) {
  const newArrivals = collections
    .filter((item) => item.details.mod === 'NEW')
    .slice(0, 6)
    .map((item, index) => {
      return <PreviewItem key={index} {...item} />;
    });
  return <React.Fragment> {newArrivals}</React.Fragment>;
}

export default NewArrivals;
