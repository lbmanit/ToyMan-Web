import React from 'react';
import LazyLoad from 'react-lazyload';
import Spinner from '../../../Spinner';
function ItemDetail(props) {
  const { id, avatarUrl, title, price, salePrice, details } = props;
  console.log(details.mod);
  return (
    <article>
      <LazyLoad height={563} offset={100} once placeholder={<Spinner />}>
        <img src={avatarUrl} alt={title} />
      </LazyLoad>
      <div>
        <h1>{title}</h1>
        <div>
          <h2>{details.mod === 'SALE' ? salePrice : ''}</h2>
          <h2>{price}</h2>
        </div>
        <h3>
          {details.rate} / 5 <i className='fa fa-star text-yellow'></i>
        </h3>
        <h3>SKU: {id}</h3>
        <h3>Vendor: {details.Vendor}</h3>
        <p>{details.describe}</p>
      </div>
    </article>
  );
}

export default ItemDetail;
