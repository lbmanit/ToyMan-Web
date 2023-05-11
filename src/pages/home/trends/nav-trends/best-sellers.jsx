import React from 'react';
import PreviewItem from '../../../items/preview-item/preview-item';
function BestSellers({ collections }) {
  const bestSellers = collections
    .filter((item) => item.details.mod === 'SALE')
    .slice(0, 6)
    .map((item, index) => {
      return <PreviewItem key={index} {...item} />;
    });
  return <React.Fragment>{bestSellers}</React.Fragment>;
}

export default BestSellers;
