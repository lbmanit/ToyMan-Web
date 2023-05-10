import React from 'react';
import PreviewItem from '../../../../shop/preview-item/preview-item';
function Featured({ collections }) {
  const featured = collections.slice(0, 6).map((item, index) => {
    return <PreviewItem key={index} {...item} />;
  });
  return <React.Fragment>{featured}</React.Fragment>;
}

export default Featured;
