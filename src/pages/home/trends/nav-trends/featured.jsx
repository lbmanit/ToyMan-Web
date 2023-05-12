import React from 'react';
import HomePreviewItem from '../../home-items/home-preview-item';
function Featured({ collections }) {
  const featured = collections.slice(0, 6).map((item, index) => {
    return <HomePreviewItem key={index} {...item} />;
  });
  return <React.Fragment>{featured}</React.Fragment>;
}

export default Featured;
