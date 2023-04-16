import React from 'react';
import LazyLoad from 'react-lazyload';
import { useLocation } from 'react-router-dom';
import Spinner from '../../../Spinner';
function ItemDetail(props) {
  const { avatarUrl, title, price, salePrice, details } = props;
  return (
    <section>
      <LazyLoad height={563} offset={100} once placeholder={<Spinner />}>
        <img src={avatarUrl} alt={title} />
      </LazyLoad>
      <div>
        <h1>{title}</h1>
        <div>
          <h1>{price}</h1>
          <h1>{details.mod === 'SALE' ? salePrice : ''}</h1>
        </div>
      </div>
    </section>
  );
}

export default ItemDetail;
